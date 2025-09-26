const TicketCard = ({ ticket, handleCardClick }) => {
  return (
    <div
      onClick={() => handleCardClick(ticket)}
      className="card bg-base-100 w-full shadow-sm cursor-pointer"
    >
      <div className="card-body">
        <div className="grid grid-cols-2  items-stretch">
          <h2 className="card-title"> {ticket.title}</h2>
          <p
            className={`  justify-self-end ${
              ticket.status === "Open" ? "badge badge-success" : ""
            } ${ticket.status === "In-Progress" ? "badge badge-warning" : ""} `}
          >
            {ticket.status}
          </p>
        </div>
        <p>{ticket.description}</p>
        <div className="flex justify-between">
          <div className="flex gap-4 ">
            <p>{ticket.id}</p>
            <p
              className={`
              ${ticket.priority === "High" ? "text-red-600" : ""}
              ${ticket.priority === "Medium" ? "text-yellow-500" : ""}
              ${ticket.priority === "Low" ? "text-green-700 " : ""}
               `}
            >
              {ticket.priority}
            </p>
          </div>

          <div className="flex gap-4">
            <p>{ticket.assignee}</p>
            <p className="flex gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                <rect
                  x="7"
                  y="12"
                  width="2"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="11"
                  y="12"
                  width="2"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="15"
                  y="12"
                  width="2"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="7"
                  y="16"
                  width="2"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="11"
                  y="16"
                  width="2"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="15"
                  y="16"
                  width="2"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
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
