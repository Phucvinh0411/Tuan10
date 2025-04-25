import React, { useState } from 'react';

const EventManagement = () => {
    // State cho mảng sự kiện và form
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        title: '',
        date: '',
        description: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    // Xử lý thay đổi input trong form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Thêm sự kiện
    const addEvent = (e) => {
        e.preventDefault();
        const newEvent = {
            id: events.length + 1, // Tạo ID đơn giản
            title: formData.title,
            date: formData.date,
            description: formData.description,
        };
        setEvents([...events, newEvent]);
        resetForm();
    };

    // Sửa sự kiện
    const editEvent = (e) => {
        e.preventDefault();
        const updatedEvents = events.map((event) =>
            event.id === formData.id ? { ...formData } : event
        );
        setEvents(updatedEvents);
        resetForm();
        setIsEditing(false);
    };

    // Xóa sự kiện
    const deleteEvent = (id) => {
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
    };

    // Reset form
    const resetForm = () => {
        setFormData({ id: null, title: '', date: '', description: '' });
    };

    // Chọn sự kiện để sửa
    const handleEditClick = (event) => {
        setFormData(event);
        setIsEditing(true);
    };

    return (
        <div>
            <h2>Quản lý sự kiện</h2>

            {/* Form thêm/sửa sự kiện */}
            <form onSubmit={isEditing ? editEvent : addEvent}>
                <div>
                    <label>Tiêu đề: </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Ngày: </label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Mô tả: </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">{isEditing ? 'Sửa' : 'Thêm'} Sự kiện</button>
                {isEditing && (
                    <button type="button" onClick={() => { resetForm(); setIsEditing(false); }}>
                        Hủy
                    </button>
                )}
            </form>

            {/* Danh sách sự kiện */}
            <h3>Danh sách sự kiện</h3>
            {events.length === 0 ? (
                <p>Chưa có sự kiện nào.</p>
            ) : (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <strong>{event.title}</strong> - {event.date} <br />
                            {event.description}
                            <div>
                                <button onClick={() => handleEditClick(event)}>Sửa</button>
                                <button onClick={() => deleteEvent(event.id)}>Xóa</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventManagement;