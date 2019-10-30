import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {Bar} from 'react-chartjs-2';

import {DataContext} from '../contexts/DataContext';

const ResultContainer = styled.div`
	height: 300px;

	a {	
		display: block;
		margin-top: 30px;
		background-color: #dc002e;
	}
`;

function Result() {
  const {selectedCategory, selectedCategoryName} = useContext(DataContext);
  const [apiData, setApiData] = useState([]);
  const [dataFlag, setDataFlag] = useState(false);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API}/results/category/${selectedCategory}`,
      );
      filterData(result.data);
    };

    fetchData();
  }, []);

  const filterData = data => {
    let localData = [];
    data.forEach((dataObject, index) => {
      const resultObject = {
        id: dataObject.submissions.id,
        title: dataObject.submissions.Title,
      };
      let obj = localData.find(obj => obj.id == resultObject.id);
      if (obj == undefined) {
        localData.push(resultObject);
      }
    });
    addScores(localData, data);
  };

  const addScores = (localData, data) => {
    data.forEach((dataObject, index) => {
      const testObject = {
        id: dataObject.submissions.id,
        title: dataObject.submissions.Title,
      };

      let obj = localData.find(obj => obj.id == testObject.id);
      if (obj) {
        const index = localData.indexOf(obj);
        const count = localData[index].count;
        if (count == undefined) {
          localData[index].count = dataObject.Score;
        } else {
          localData[index].count = localData[index].count + dataObject.Score;
        }
      }
    });
    setApiData(localData);
    createChartData(localData);
  };

  const createChartData = localData => {
    const labelArray = [];
    const scoreArray = [];
    localData.forEach(data => {
      labelArray.push(data.title);
      scoreArray.push(data.count);
    });
    const localChartData = {
      labels: labelArray,
      datasets: [
        {
          label: 'Agency Scores',
          backgroundColor: 'rgba(220,0,46,0.2)',
          borderColor: 'rgba(220,0,46,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: scoreArray,
        },
      ],
    };
    setChartData(localChartData);
    setDataFlag(true);
  };

  return (
    <ResultContainer>
      <h3>Results for {selectedCategoryName}</h3>
      {!dataFlag && <div>No results for this category yet...</div>}
      {dataFlag && (
        <Bar
          data={chartData}
          width={100}
          height={100}
          options={{
            animation: false,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
			)}
								<Link to='/results' className='btn'>Back to Results</Link>
    </ResultContainer>
  );
}

export default Result;
