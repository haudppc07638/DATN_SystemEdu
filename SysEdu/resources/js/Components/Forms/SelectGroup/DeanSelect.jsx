import React, { useState, useEffect } from 'react';

const DeanSelect = ({ facultyId }) => {
  const [selectedDean, setSelectedDean] = useState('');
  const [deans, setDeans] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  useEffect(() => {
    const fetchDeans = async () => {
      const response = await fetch(`/api/deans?facultyId=${facultyId}`);
      const data = await response.json();
      setDeans(data);
    };

    fetchDeans();
  }, [facultyId]);

  return (
    <div className="mb-4.5">
      <label className="mb-2.5 block text-black dark:text-white">
        Nhân sự
      </label>

      q
    </div>
  );
};

export default DeanSelect;