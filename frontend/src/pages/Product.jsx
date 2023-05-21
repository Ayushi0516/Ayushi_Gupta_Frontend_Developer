import React, { useEffect, useState } from "react";
import { Pagination } from "../component/Pagination";
import { Products } from "../component/Products";

export function Product() {
  const [capsules, setCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState('');
  const [launchFilter, setLaunchFilter] = useState('');
  
  
  
  useEffect(() => {
    async function fetchCapsules() {
      try {
        let url = `https://api.spacexdata.com/v3/capsules?limit=${perPage}&offset=${
          (currentPage - 1) * perPage
        }`;
        if (statusFilter) {
          url += `&status=${statusFilter}`;
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const capsulesData = await response.json();
        let filteredCapsules=capsulesData;
        // setCapsules(capsulesData);
 

        if (typeFilter) {
            filteredCapsules = filteredCapsules.filter(
              (capsule) => capsule.type === typeFilter
            );
          }
  
          // Apply launch filter
          if (launchFilter) {
            filteredCapsules = filteredCapsules.filter(
              (capsule) => capsule.original_launch === launchFilter
            );
          }
          setCapsules(filteredCapsules);
        //    setTotalItems(filteredCapsules.length)

//    pagecount 
        const totalCount = response.headers.get("spacex-api-count");
         setTotalItems(parseInt(totalCount, 10));
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchCapsules();
  }, [currentPage, perPage, statusFilter,typeFilter,launchFilter]);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleStatusFilterChange(event) {
    setStatusFilter(event.target.value);
    setCurrentPage(1);
  }

  function handleTypeFilterChange(event) {
    setTypeFilter(event.target.value);
    setCurrentPage(1);
  }

  function handleLaunchFilterChange(event) {
    setLaunchFilter(event.target.value);
    setCurrentPage(1);
  }

  const totalPages = Math.ceil(totalItems / perPage);

  return (
    <div>
      <h1>Capsules</h1>
      <div>
        <label htmlFor="typeFilter">Filter by Type:</label>
        <input
          type="text"
          id="typeFilter"
          value={typeFilter}
          onChange={handleTypeFilterChange}
        />
      </div>
      <div>
        <label htmlFor="launchFilter">Filter by Launch:</label>
        <input
          type="text"
          id="launchFilter"
          value={launchFilter}
          onChange={handleLaunchFilterChange}
        />
      </div>
      <div>
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={handleStatusFilterChange}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {capsules.map((capsule,index) => (
        <Products capsule={capsule} index={index}/>
      ))}
      <div>
        <Pagination totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage}/>
      </div>
    </div>
  );
}
