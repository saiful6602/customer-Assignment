import React from "react";

const TicketCard = ({ ticket, handleCardClick }) => {
  
  const getStatusBadgeClasses = (status) => {
    let classes = 'badge badge-lg rounded-full justify-self-end text-white font-semibold';

    switch (status) {
      case "Open":
        classes += " badge-success";
        break;
      case "In-Progress":
        classes += " badge-warning";
        break;
      case "Closed":
        classes += " badge-info"; 
        break;
      default:
        classes += " badge-neutral";
    }
    return classes;
  };
  const getPriorityColorClass = (priority) => {
      switch (priority) {
          case "High":
              return "text-red-600";
          case "Medium":
              return "text-yellow-600";
          case "Low":
              return "text-green-600";
          default:
              return "text-gray-600"; 
      }
  };

  return (
    <div
      onClick={() => handleCardClick(ticket)}
      className="card bg-base-100 w-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 mb-4"
    >
      <div className="card-body p-4">
        <div className="grid grid-cols-2 items-start gap-x-4">
          <h2 className="card-title text-base font-semibold text-gray-800">
            {ticket.title}
          </h2>
          <p className={getStatusBadgeClasses(ticket.status)}>
            <span className="h-2 w-2 mr-2 bg-white rounded-full inline-block"></span>
            {ticket.status}
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-1 mb-2">{ticket.description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 pt-2 border-t border-gray-100">
          <div className="flex gap-4 items-center">
            <p className="font-medium text-gray-700">{ticket.id}</p>
            <p className={`font-medium ${getPriorityColorClass(ticket.priority)}`}> 
                <span className="font-semibold">Priority</span>{" "} 
                <span className="font-semibold">{ticket.priority}</span>
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-gray-700">{ticket.assignee}</p>
            <p className="flex gap-1 items-center text-gray-500">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
              >
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="15"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                <path d="M8 3V6" stroke="currentColor" strokeWidth="2" />
                <path d="M16 3V6" stroke="currentColor" strokeWidth="2" />
                <rect x="7" y="12" width="2" height="2" rx="1" fill="currentColor" />
                <rect x="11" y="12" width="2" height="2" rx="1" fill="currentColor" />
                <rect x="15" y="12" width="2" height="2" rx="1" fill="currentColor" />
                <rect x="7" y="16" width="2" height="2" rx="1" fill="currentColor" />
                <rect x="11" y="16" width="2" height="2" rx="1" fill="currentColor" />
                <rect x="15" y="16" width="2" height="2" rx="1" fill="currentColor" />
              </svg>
              {ticket.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;