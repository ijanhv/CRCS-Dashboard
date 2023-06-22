import e from "express";
import Society from "../models/society.model.js";

export const getSociety = async (req, res) => {
    try {
        const society = await Society.find();
        res.status(200).json(society);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createSociety = async (req, res) => {
    const society = req.body;
    const newSociety = new Society(society);
    try {
        await newSociety.save();
        res.status(201).json(newSociety);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// get number of societies
export const getSocietyCount = async (req, res) => {
    try {
        const societyCount = await Society.countDocuments();
        res.status(200).json(societyCount);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//  get society count based on states 
export const getSocietyCountByState = async (req, res) => {
    try {
        const societyCount = await Society.aggregate([
            {
                $group: {
                    _id: "$state",
                    count: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(societyCount);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// get society count based on states, year and type use query params ?=

export const getSocietyCountByStateYearType = async (req, res) => {
    try {
      const { state, year, type } = req.query;
  
      const matchQuery = {};
  
      if (state) {
        matchQuery.state = state;
      }
      if (year) {
        matchQuery.year = year;
      }
      if (type) {
        matchQuery.type = type;
      }
  
      const societyCount = await Society.aggregate([
        {
          $match: matchQuery
        },
        {
          $group: {
            _id: {
              state: '$state',
              year: '$year',
              type: '$type'
            },
            count: { $sum: 1 }
          }
        }
      ]);
  
      res.status(200).json(societyCount);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  // get count by state

  export const getSocietyByState = async (req, res) => {
    try {
        const societyCount = await Society.aggregate([
            {
                $group: {
                    _id: "$state",
                    count: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(societyCount);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


  // get count by year

  export const getSocietyByYear = async (req, res) => {
    try {
        const societyCount = await Society.aggregate([
            {
                $group: {
                    _id: { $substr: ["$dateOfRegistration", 6, 4] },
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(societyCount);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


    // get count by type

export const getSocietyByType = async (req, res) => {
    try {
        const societyCount = await Society.aggregate([
            {
                $group: {
                    _id: "$sectorType",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(societyCount);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

