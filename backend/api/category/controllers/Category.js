"use strict";

module.exports = {
  findByCategoryAndRoom: async ctx => {
    const urlArray = ctx.request.url.split("/");
    const room = urlArray[3];
    const result = await strapi
      .query("category")
      .model.query(qb => {
        qb.where("room", room);
      })
      .fetchAll();
    const fields = result.toJSON();
    ctx.send(fields);
  }
};
