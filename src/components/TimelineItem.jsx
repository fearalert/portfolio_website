const TimelineItem = ({ title, position, period, details }) => (
    <div className="relative pl-8 mb-8">
      <span className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></span>
      <div className="ml-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{position} | {period}</p>
        {details && (
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

export default TimelineItem;