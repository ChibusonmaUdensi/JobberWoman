import { useRouter } from 'next/router';
import Link from 'next/link';
import { initialJobs } from '../../data/jobs';

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the job with the matching id
  const job = initialJobs.find(job => job.id === parseInt(id));
  
  if (router.isFallback || !job) {
    return <div className="container mx-auto px-4 py-20 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-500 text-white p-6">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="text-xl mt-2">{job.company}</p>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-gray-100 rounded-full px-4 py-2">
              <span className="font-medium">Location:</span> {job.location}
            </div>
            <div className="bg-gray-100 rounded-full px-4 py-2">
              <span className="font-medium">Salary:</span> {job.salary}
            </div>
            <div className="bg-gray-100 rounded-full px-4 py-2">
              <span className="font-medium">Type:</span> {job.type}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Job Description</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Requirements</h2>
            <ul className="list-disc list-inside space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-700">{req}</li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/" className="text-blue-500 hover:text-blue-700 mr-4">
              Back to Listings
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}