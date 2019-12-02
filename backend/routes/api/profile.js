const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

//@route    GET api/profile/me
//@desc     Get user profile
//@access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const prof = await Profile.findOne({ user: req.user.id }).populate('user', [
      'name',
      'avatar'
    ]);

    if (!prof) {
      return res.status(400).json({ msg: 'There is no profile for user' });
    }

    res.json(prof);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/profile
//@desc     Create/Update user prof
//@access   Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required')
        .not()
        .isEmpty(),
      check('music', 'Music is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.error(errors);
      res.status(400).json({ errors: errors.array() });
    }

    const {
      bio,
      location,
      music,
      instruments,
      status,
      born,
      instagram,
      twitter,
      soundcloud,
      facebook,
      youtube,
      personal
    } = req.body;

    //Prof obj
    const profFields = {};
    profFields.user = req.user.id;

    if (bio) profFields.bio = bio;
    if (location) profFields.location = location;
    if (music) {
      profFields.music = music.split(',').map(music => music.trim());
    }
    if (instruments) {
      profFields.instruments = instruments
        .split(',')
        .map(instruments => instruments.trim());
    }
    if (status) profFields.status = status;
    if (born) profFields.born = born;

    profFields.social = {};
    if (instagram) profFields.social.instagram = instagram;
    if (twitter) profFields.social.twitter = twitter;
    if (soundcloud) profFields.social.soundcloud = soundcloud;
    if (facebook) profFields.social.facebook = facebook;
    if (youtube) profFields.social.youtube = youtube;
    if (personal) profFields.social.personal = personal;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      //Update profile
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profFields },
          { new: true }
        );

        return res.json(profile);
      }

      //Create Profile

      profile = new Profile(profFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    GET api/profile
//@desc     Get all profiles
//@access   Public

router.get('/', async (req, res) => {
  try {
    const profs = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    Delete api/profile
//@desc     Delete profile, user and posts
//@access   Private

router.delete('/', auth, async (req, res) => {
  try {
    //@todo - remove user posts

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    //Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;
