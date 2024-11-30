import express from "express";
import fs from "fs";
import "dotenv/config";

// MIDDLEWARE
const router = express.Router();
const usersDetailsJSON = process.env.USERS;

// GET ALL USERS FOR HOMEPAGE
router.get("/", (_req, res) => {
  const users = fs.readFileSync(usersDetailsJSON);
  const parsedUsers = JSON.parse(users);
  const userObj = parsedUsers.map((user)=> {
    return {
      id: user.uuid,
      channelName: user.channelName,
      channelDescription: user.channelDescription,
      followerCount: user.followerCount,
      subscriberCount: user.subscriberCount,
      linkedSocials: user.linkedSocialMedia,
      profilePic: user.profilePicture
    }
  });
  res.json(userObj);
})

router.get("/:id", (req, res) => {
  const users = fs.readFileSync(usersDetailsJSON, "utf8");
  const parsedUsers = JSON.parse(users);
  const foundUser = parsedUsers.find((user) => user.id === req.params.id);
  foundUser ? res.json(foundUser) : res.status(404).json({"message": "No video with that id exists"});
});

export default router;