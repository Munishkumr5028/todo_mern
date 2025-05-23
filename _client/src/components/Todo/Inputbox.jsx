import React, { useState, useEffect } from "react";
import "./Inputbox.css";

function Inputbox({ handleClose, handleSave, editingTask }) {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    eventDate: "",
    eventTime: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({ ...editingTask }); // ✅ clone to avoid mutation
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    if (!formData.task.trim()) {
      alert("Task name cannot be empty.");
      return;
    }

    if (!formData.description.trim()) {
      alert("Description cannot be empty.");
      return;
    }

    if (formData.eventDate.trim() < today) {
      alert("You cannot add a task for a past date.");
      return;
    }

    handleSave(formData); // This goes to handleUpdateTask or handleSaveTask
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-flied">
        <div className="filed">
          <input
            type="text"
            name="task"
            placeholder="Name of the Task"
            value={formData.task || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="filed">
          <input
            type="text"
            name="description"
            placeholder="A short description of the task"
            value={formData.description || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="filed">
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="filed">
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-box">
          <button className="btn-blue" type="submit">
            {editingTask ? "Update" : "Save"}
          </button>
          <button className="btn-blue" type="button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default Inputbox;
