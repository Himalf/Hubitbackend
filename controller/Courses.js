var mongoose = require("mongoose");
var CourseModal = require("../modal/Course");
// const itemData = require("../route/Course");
// get request
module.exports.getCourse = async (req, res) => {
  try {
    const CourseData = await CourseModal.find();
    res.status(200).json({ data: CourseData, message: "course fetched" });
  } catch (err) {
    res.status(404).json({ messege: err.message, status: err.status });
  }
};
// get single course
module.exports.getCourses = async (req, res) => {
  try {
    const CourseData = await CourseModal.findById({ _id: req.params.id });
    res.status(200).json({ data: CourseData, message: "course fetched" });
  } catch (error) {
    res.status(404).json({ messege: err.message, status: err.status });
  }
}
// post request
module.exports.PostCourse = async (req, res, upload) => {
  const courseData = req.body;

  try {
    console.log(courseData, req.file, "worked");
    // const file = `${process.env.APP_HOSTING_ADDRESS + req.file.filename}`;
    const url = req.protocol + "://" + req.get("host");
    const newCourse = new CourseModal({
      course_name: courseData.course_name,
      course_category: courseData.course_category,
      duration: courseData.duration,
      description: courseData.description,
      syallabus: [],
      image: req?.file?.path,
    });

    await newCourse.save();
    res
      .status(201)
      .json({ data: newCourse, message: "course has been addded" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Update request
module.exports.updateCourse = (req, res, uploads) => {
  CourseModal.updateOne({ _id: req.params.id }, { $set: req.body }, (error) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Success');
      res.send('Success');
    }
  });
};
// single task update
// Delete request
module.exports.DeleteCourse = (req, res) => {
  CourseModal.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(data);
  });
};
