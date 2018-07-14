module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Characters', [
      {
        firstName: 'Cloud',
        lastName: 'Strife',
        weapon: 'Buster Sword',
      },
      {
        firstName: 'Tifa',
        lastName: 'Lockhart',
        weapon: 'Leather Gloves',
      },
      {
        firstName: 'Barret',
        lastName: 'Wallace',
        weapon: 'Gatling Gun',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Characters', null, {});
  }
};
