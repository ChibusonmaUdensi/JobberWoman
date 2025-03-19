import { useState } from 'react';
import { useRouter } from 'next/router';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';
import { initialJobs } from '../data/jobs';

export default function Home() {
  const router = useRouter();
  const [jobs, setJobs] = useState(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleJobs, setVisibleJobs] = useState(6);

  // Handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(term.toLowerCase()) ||
        job.company.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredJobs(results);
    setVisibleJobs(6); // Reset pagination on search
  };

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleJobs((prev) => prev + 6);
  };

  // Navigate to job detail page
  const handleJobClick = (id) => {
    router.push(`/job/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Job Listings</h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Job Listings Grid */}
      <div className="mt-8">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found matching your search.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.slice(0, visibleJobs).map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => handleJobClick(job.id)}
                />
              ))}
            </div>

            {/* Load More Button */}
            {visibleJobs < filteredJobs.length && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Post a New Job Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => router.push('/post-job')}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
        >
          Post a New Job
        </button>
      </div>
    </div>
  );
}
