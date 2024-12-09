import React, { useState } from "react";
import {
  Button,
  Form,
  Dropdown,
  TextArea,
  Radio,
  Checkbox,
  Message,
} from "semantic-ui-react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pinCode: "",
    password: "",
    rePassword: "",
    gender: "",
    subjects: [],
    skills: [],
    grade: "",
    feedback: "",
    qualification: "",
    hobbies: "",
    volume: 25, // default value for volume
  });

  const [errors, setErrors] = useState({});

  const gradeOptions = [
    { key: "A", value: "A", text: "A" },
    { key: "B", value: "B", text: "B" },
    { key: "C", value: "C", text: "C" },
  ];

  const qualificationOptions = [
    { key: "High School", value: "High School", text: "High School" },
    { key: "Bachelor", value: "Bachelor", text: "Bachelor" },
    { key: "Master", value: "Master", text: "Master" },
  ];

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          error = "Name should only contain letters and spaces.";
        }
        break;
      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "pinCode":
        if (!/^[0-9]{6}$/.test(value)) {
          error = "Please enter a valid PINCODE.";
        }
        break;
      case "password":
        if (value.length < 8) {
          error = "Password must be at least 8 characters.";
        } else if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {
          error = "Password must contain letters and numbers.";
        }
        break;
      case "rePassword":
        if (value !== formData.password) {
          error = "Passwords do not match.";
        }
        break;
      case "feedback":
        if (!value.trim()) {
          error = "Feedback cannot be empty.";
        } else if (value.length < 10) {
          error = "Feedback must be at least 10 characters.";
        }
        break;
      case "hobbies":
        if (!value.trim()) {
          error = "Hobbies cannot be empty.";
        }
        break;
      case "gender":
        if (!value) {
          error = "Please select a gender.";
        }
        break;
      case "subjects":
        if (value.length === 0) {
          error = "Please select at least one subject.";
        }
        break;
      case "skills":
        if (value.length === 0) {
          error = "Please select at least one skill.";
        }
        break;
      case "volume":
        if (value < 0 || value > 50) {
          error = "Volume must be between 0 and 50.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });

    // Validate the field dynamically
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleCheckboxChange = (e, { name, value }) => {
    const updatedValues = formData[name].includes(value)
      ? formData[name].filter((item) => item !== value)
      : [...formData[name], value];
    setFormData({ ...formData, [name]: updatedValues });

    // Validate checkbox dynamically
    const error = validateField(name, updatedValues);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};

    // Validate all fields before submission
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Feedback Form</h1>

      {Object.keys(errors).length > 0 && (
        <Message
          error
          header="There are some errors in your form"
          list={Object.values(errors)}
        />
      )}

      <Form onSubmit={handleSubmit} className="feedback-form">
        <Form.Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          error={
            errors.name ? { content: errors.name, pointing: "below" } : null
          }
        />
        <Form.Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          error={
            errors.email ? { content: errors.email, pointing: "below" } : null
          }
        />
        <Form.Input
          label="Pin Code"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Enter your pin code"
          required
          error={
            errors.pinCode
              ? { content: errors.pinCode, pointing: "below" }
              : null
          }
        />
        <Form.Input
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          type="password"
          required
          error={
            errors.password
              ? { content: errors.password, pointing: "below" }
              : null
          }
        />
        <Form.Input
          label="Re-enter Password"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleChange}
          placeholder="Re-enter password"
          type="password"
          required
          error={
            errors.rePassword
              ? { content: errors.rePassword, pointing: "below" }
              : null
          }
        />
        <div className="gender-section">
          <label>Gender:</label>
          <Form.Field>
            <Radio
              label="Male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Other"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
          </Form.Field>
        </div>
        {errors.gender && (
          <Message error content={errors.gender} pointing="below" />
        )}
        <div className="subjects-section">
          <label>Subjects:</label>
          {["Math", "Science", "History"].map((subject) => (
            <Form.Field key={subject}>
              <Checkbox
                label={subject}
                name="subjects"
                value={subject}
                checked={formData.subjects.includes(subject)}
                onChange={handleCheckboxChange}
              />
            </Form.Field>
          ))}
        </div>
        {errors.subjects && (
          <Message error content={errors.subjects} pointing="below" />
        )}
        <div className="skills-section">
          <label>Skills:</label>
          {["Programming", "Communication", "Problem-Solving"].map((skill) => (
            <Form.Field key={skill}>
              <Checkbox
                label={skill}
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleCheckboxChange}
              />
            </Form.Field>
          ))}
        </div>
        {errors.skills && (
          <Message error content={errors.skills} pointing="below" />
        )}
        <Form.Dropdown
          label="Grade"
          name="grade"
          options={gradeOptions}
          value={formData.grade}
          onChange={handleChange}
          selection
          required
        />
        <label>Feedback</label>
        <TextArea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Enter your feedback"
          required
          error={
            errors.feedback
              ? { content: errors.feedback, pointing: "below" }
              : null
          }
        />
        <Form.Dropdown
          label="Qualification"
          name="qualification"
          options={qualificationOptions}
          value={formData.qualification}
          onChange={handleChange}
          selection
          required
        />
        <Form.Input
          label="Hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          placeholder="Enter your hobbies"
          required
          error={
            errors.hobbies
              ? { content: errors.hobbies, pointing: "below" }
              : null
          }
        />
        <label htmlFor="vol">Volume (between 0 and 50):</label>
        <input
          type="range"
          id="vol"
          name="volume"
          min="0"
          max="50"
          value={formData.volume}
          onChange={handleChange}
        />
        {errors.volume && (
          <Message error content={errors.volume} pointing="below" />
        )}
        <Button type="submit" color="green" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;
