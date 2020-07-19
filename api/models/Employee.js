/**
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {
      type: "string",
      required: true,
      description: "Name of the employee",
      maxLength: 120,
      example: "Robert Downey, Jr.",
    },

    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 250,
      description: "Email for login & employee identifier",
      example: "cool-staff@example.com",
    },

    dayOfBirth: {
      type: "string",
      columnType: "date",
      required: true,
      description: "just date (YYYY-MM-DD) not datetime",
      example: "1990-04-10",
    },

    phoneNumber: {
      type: "string",
      required: false,
      maxLength: 15,
      description: "phone number",
      example: "+6595701023",
    },

    address: {
      type: "string",
      required: false,
      maxLength: 300,
      description: "address of employee",
      example: "+6595701023",
    },

    salary: {
      type: "number",
      required: true,
      description: "employee's salary",
      example: "1500",
    },

    isManager: {
      type: "boolean",
      defaultsTo: false,
      description: 'Whether this user is a "manager" or jus "staff"',
      extendedDescription: `if this set true employee have a role as "manager", otherwise is "staff"`,
    },

    password: {
      type: "string",
      required: true,
      description:
        "Securely hashed representation of the employee's login password.",
      protect: true,
      example: "2$28abbeabna321489103-13948134nad",
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
};
