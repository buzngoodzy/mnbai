import React from 'react';
import Header from './components/Header'; // Repurposed as Navbar
import ScanController from './components/ScanController'; // Repurposed as Hero
import Summary from './components/Summary'; // Repurposed as Services
import ResultsTable from './components/ResultsTable'; // Repurposed as WhyUs/CTA/Footer

const App: React.FC = () => {
    return (
        <div className="bg-gray-900">
            <Header />
            <main>
                <ScanController />
                <Summary />
                <ResultsTable />
            </main>
        </div>
    );
};

export default App;