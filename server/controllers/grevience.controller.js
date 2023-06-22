import Grevience from "../models/greviences.model.js";

// get all grevience
export const getGrevience = async (req, res) => {
    try {
        const grevience = await Grevience.find();
        res.status(200).json(grevience);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    }

// get grevience by societyId

export const getGrevienceBySocietyId = async (req, res) => {
    try {
        const grevience = await Grevience.find({ societyId: req.params.societyId });
        res.status(200).json(grevience);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// post grevience by societyId

export const postGrevienceBySocietyId = async (req, res) => {
    try {
        const societyId = req.params.societyId;
        console.log(societyId);
        const grevience = new Grevience({
            societyId,
            ...req.body
        });
        await grevience.save();
        res.status(200).json(grevience);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}