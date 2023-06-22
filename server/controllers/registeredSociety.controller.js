import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/error.js";
import ResisteredSociety from "../models/registeredSociety.model.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new ResisteredSociety({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("Society created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await ResisteredSociety.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(404, "Wrong password or username!!"));

    const token = jwt.sign(
      {
        id: user._id,
        // isSeller: user.isSeller
      },
      process.env.JWT_SECRET
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};

// get all societies

export const getSociety = async (req, res) => {
    try {
        const societies = await ResisteredSociety.find();
        res.status(200).json(societies);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// get society by email

export const getSocietyByEmail = async (req, res) => {
  try {
    const society = await ResisteredSociety.find({ email: req.params.email });
    res.status(200).json(society);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update Society by email 

// export const updateSocietyByEmail = async (req, res) => {
//     try {
//         const society = ResisteredSociety.find({ email: req.params.email });
//         if (!society) return res.status(404).send("Society not found");
//         await ResisteredSociety.updateOne({ email: req.params.email }, { $set: req.body });
//         res.status(200).send("Society updated");
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// Update Society by Id 

export const updateSocietyById = async (req, res) => {
    try {
        console.log(req.params.id);
        const society = ResisteredSociety.find({ _id: req.params.id });
        if (!society) return res.status(404).send("Society not found");
        const updatedSociety = await ResisteredSociety.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).send(updatedSociety);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const logout = (req, res) => {
  try {
    res
      .clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("Logged out");
    debugger;
  } catch (error) {
    console.log(error);
  }
};
