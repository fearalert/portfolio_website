const TimelineItem = ({ title, position, period, details }) => (
  <div className="relative pl-10 mb-8">
    {/* <span className="absolute left-2 top-0 w-px h-full bg-gray-600"></span> */}

    <span
      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white-gray rounded-full"
    ></span>

    <div className="ml-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white-gray mb-2">
        {position} | {period}
      </p>
      {details && (
        <ul className="list-disc list-inside text-white-gray space-y-1">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default TimelineItem;
