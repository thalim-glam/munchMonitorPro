const { Schema, model } = require('mongoose');

const petSchema = require('./Pet');

const feederSchema = new Schema(
     {
          feed_date: {
               type: String,
               required: true,
          },
          pet_id: petSchema,
          breakfast_food_type: {
               type: String,
               required: true,
          },
          medicine_morning: {
               type: String,
               required: true,
          },
          lunch_food_type: {
               type: String,
               required: true,
          },
          medicine_afternoon: {
               type: String,
               required: true,
          },
          dinner_food_type: {
               type: String,
               required: true,
          },
          medicine_evening: {
               type: String,
               required: true,
          },
     },
     {
          toJSON: {
               virtuals: true,
          },
     }
);

const Feeder = model('Feeder', feederSchema);

module.exports = Feeder;