import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-blue-600">{job.title}</h2>
        <h3 className="text-lg font-medium text-gray-700 mb-3">{job.company}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{job.location}</span>
          <Link href={`/job/${job.id}`}>
            <span className="text-blue-500 hover:text-blue-700 font-medium">View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
