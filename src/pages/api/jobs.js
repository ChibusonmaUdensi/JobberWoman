export default function handler(req, res) {
    if (req.method === 'POST') {
      // Simulate saving data to a database
      const jobData = req.body;
      console.log('Received job data:', jobData);
  
      // Simulate a delay for API processing
      setTimeout(() => {
        res.status(200).json({ message: 'Job saved successfully!' });
      }, 1000);
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
  }