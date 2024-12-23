import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const InteractiveCaseStudy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const sections = {
    schoolOverview: {
      title: "School Demographics & Context",
      mainText: "Jefferson Heights High School, located in a suburban area of Lakeview County, serves a diverse population of 800 students across grades 9-12.",
      details: {
        "Student Demographics": {
          text: "The student body consists of:",
          items: [
            "50% White",
            "25% Black/African American",
            "15% Hispanic/Latino",
            "10% Asian or other ethnicities",
            "40% qualify for free or reduced lunch"
          ]
        },
        "School Environment": {
          text: "Current school programs and staffing include:",
          items: [
            "After-school activities (sports, music, robotics)",
            "Part-time school counselor",
            "School nurse",
            "Regular health screenings"
          ]
        }
      }
    },
    substanceUseData: {
      title: "Current Substance Use Challenges",
      mainText: "Recent data indicates concerning trends in student substance use, particularly with vaping and cannabis.",
      details: {
        "Usage Statistics": {
          text: "Anonymous survey results show:",
          items: [
            "28% of students reported vaping in past 30 days",
            "18% admitted to cannabis use",
            "12 on-campus marijuana incidents last semester"
          ]
        },
        "Academic Impact": {
          text: "Observable effects on student success:",
          items: [
            "Decreased academic performance",
            "Increased attendance issues",
            "Changes in peer relationships and social dynamics"
          ]
        }
      }
    },
    preventionEfforts: {
      title: "Current Prevention Framework",
      mainText: "The school's approach to substance use prevention needs updating to better serve current student needs.",
      details: {
        "Existing Programs": {
          text: "Current prevention efforts include:",
          items: [
            "Awareness assemblies",
            "Basic health education curriculum",
            "Annual staff training webinar",
            "Student health screenings"
          ]
        },
        "Areas for Improvement": {
          text: "Identified gaps in current approach:",
          items: [
            "Limited student engagement",
            "Lack of evidence-based strategies",
            "Need for cultural relevance",
            "Insufficient staff training",
            "No formal prevention curriculum"
          ]
        }
      }
    },
    communityPartnerships: {
      title: "Support Network & Resources",
      mainText: "Jefferson Heights maintains partnerships with local organizations to provide comprehensive support for students.",
      details: {
        "Lakeview Health Services": {
          text: "Comprehensive health organization providing:",
          items: [
            "Mental health counseling",
            "Substance use treatment programs",
            "Family support services",
            "Crisis intervention",
            "Prevention education",
            "Telehealth options"
          ]
        },
        "Lakeview Adolescent Recovery Program": {
          text: "Specialized teen treatment services including:",
          items: [
            "Individual and group counseling",
            "Outpatient programs",
            "Family therapy",
            "Peer support groups",
            "Direct referral pathway"
          ]
        },
        "Youth Empowerment Alliance": {
          text: "Youth-focused prevention and development programs:",
          items: [
            "Peer leadership initiatives",
            "Prevention workshops",
            "Life skills training",
            "Mentorship opportunities",
            "Youth advocacy programs"
          ]
        },
        "School Community Groups": {
          text: "Internal support networks:",
          items: [
            "Active Parent-Teacher Association",
            "Parent education workshops",
            "Community awareness events",
            "Prevention program fundraising",
            "Parent support network"
          ]
        }
      }
    }
  };

  const toggleSection = (sectionKey, detailKey = null) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: detailKey === null 
        ? !prev[sectionKey] 
        : {
          ...prev[sectionKey],
          [detailKey]: !prev[sectionKey]?.[detailKey]
        }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Jefferson Heights High School Case Study</h1>
      
      {Object.entries(sections).map(([sectionKey, section]) => (
        <div key={sectionKey} className="mb-6 border rounded-lg p-4 bg-gray-50">
          <button
            onClick={() => toggleSection(sectionKey)}
            className="w-full flex justify-between items-center text-left"
          >
            <h2 className="text-xl font-semibold text-gray-700">{section.title}</h2>
            {expandedSections[sectionKey] ? 
              <ChevronUp className="w-6 h-6 text-gray-500" /> : 
              <ChevronDown className="w-6 h-6 text-gray-500" />
            }
          </button>
          
          <p className="mt-2 text-gray-600">{section.mainText}</p>
          
          {expandedSections[sectionKey] && (
            <div className="mt-4 space-y-4">
              {Object.entries(section.details).map(([detailKey, detail]) => (
                <div key={detailKey} className="pl-4 border-l-2 border-blue-200">
                  <h3 className="font-medium text-gray-700 mb-2">{detailKey}</h3>
                  <p className="text-gray-600 mb-2">{detail.text}</p>
                  {detail.items.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {detail.items.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InteractiveCaseStudy;