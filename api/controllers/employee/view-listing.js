module.exports = {
  friendlyName: "View listing",

  description: 'Display "Listing" page.',

  exits: {
    success: {
      viewTemplatePath: "pages/employee/listing",
    },
  },

  fn: async function () {
    const users = await User.find(); //.populate("fullName");

    return { users: users };
  },
};
