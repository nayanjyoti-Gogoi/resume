import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Nav, Tab, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { templates, resumeSections } from '../data/templates';
import ResumePreview from '../components/ResumePreview';
import ResumeForm from '../components/ResumeForm';
import ColorPicker from '../components/ColorPicker';
import FontSelector from '../components/FontSelector';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const templateId = queryParams.get('template') || 'fresher';

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeData, setResumeData] = useState({});
  const [activeSection, setActiveSection] = useState('personal');
  const [customColor, setCustomColor] = useState('');
  const [customFont, setCustomFont] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Initialize resume data from localStorage or with empty values
  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    } else {
      initializeResumeData();
    }
  }, []);

  // Set selected template when templateId changes
  useEffect(() => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
      setCustomColor(template.color);
      setCustomFont(template.font);
    } else {
      navigate('/templates');
    }
  }, [templateId, navigate]);

  // Initialize empty resume data based on template sections
  const initializeResumeData = () => {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;

    const initialData = {};
    template.sections.forEach(sectionId => {
      const section = resumeSections[sectionId];
      if (section) {
        if (section.multiple) {
          initialData[sectionId] = [createEmptyItem(section)];
        } else {
          initialData[sectionId] = createEmptyItem(section);
        }
      }
    });

    setResumeData(initialData);
  };

  // Create an empty item for a section
  const createEmptyItem = (section) => {
    const item = {};
    section.fields.forEach(field => {
      if (field.type === 'checkbox') {
        item[field.id] = false;
      } else if (field.type === 'tags') {
        item[field.id] = [];
      } else {
        item[field.id] = '';
      }
    });
    return item;
  };

  // Handle form input changes
  const handleInputChange = (sectionId, field, value, index = null) => {
    setResumeData(prevData => {
      const newData = { ...prevData };
      
      if (index !== null) {
        // For multiple items (like experience, education)
        newData[sectionId] = [...newData[sectionId]];
        newData[sectionId][index] = {
          ...newData[sectionId][index],
          [field]: value
        };
      } else {
        // For single items (like personal info)
        newData[sectionId] = {
          ...newData[sectionId],
          [field]: value
        };
      }
      
      // Save to localStorage
      localStorage.setItem('resumeData', JSON.stringify(newData));
      return newData;
    });
  };

  // Add a new item to a multiple section
  const addSectionItem = (sectionId) => {
    const section = resumeSections[sectionId];
    if (!section || !section.multiple) return;

    setResumeData(prevData => {
      const newData = { ...prevData };
      newData[sectionId] = [...(newData[sectionId] || []), createEmptyItem(section)];
      
      // Save to localStorage
      localStorage.setItem('resumeData', JSON.stringify(newData));
      return newData;
    });
  };

  // Remove an item from a multiple section
  const removeSectionItem = (sectionId, index) => {
    setResumeData(prevData => {
      const newData = { ...prevData };
      newData[sectionId] = newData[sectionId].filter((_, i) => i !== index);
      
      // Save to localStorage
      localStorage.setItem('resumeData', JSON.stringify(newData));
      return newData;
    });
  };

  // Handle color change
  const handleColorChange = (color) => {
    setCustomColor(color);
  };

  // Handle font change
  const handleFontChange = (font) => {
    setCustomFont(font);
  };

  // Download resume as PDF
  const downloadResume = () => {
    // Show success alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    
    // PDF download functionality will be implemented with react-to-pdf
    // This is a placeholder for the actual implementation
  };

  if (!selectedTemplate) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="resume-builder-page">
      <Container fluid>
        {showAlert && (
          <Alert 
            variant="success" 
            className="download-alert"
            onClose={() => setShowAlert(false)} 
            dismissible
          >
            Your resume has been downloaded successfully!
          </Alert>
        )}
        
        <Row>
          {/* Left Side - Form */}
          <Col lg={6} className="form-column">
            <div className="form-container">
              <h1 className="builder-title">Resume Builder</h1>
              <p className="builder-subtitle">
                Fill in your details to create a professional resume
              </p>
              
              <Tab.Container id="resume-sections" activeKey={activeSection}>
                <Row>
                  <Col md={3}>
                    <Nav variant="pills" className="flex-column section-nav">
                      {selectedTemplate.sections.map(sectionId => {
                        const section = resumeSections[sectionId];
                        return (
                          <Nav.Item key={sectionId}>
                            <Nav.Link 
                              eventKey={sectionId}
                              onClick={() => setActiveSection(sectionId)}
                            >
                              <i className={`fas fa-${section.icon}`}></i>
                              {section.title}
                            </Nav.Link>
                          </Nav.Item>
                        );
                      })}
                      <Nav.Item>
                        <Nav.Link 
                          eventKey="customize"
                          onClick={() => setActiveSection('customize')}
                        >
                          <i className="fas fa-paint-brush"></i>
                          Customize
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={9}>
                    <Tab.Content>
                      {selectedTemplate.sections.map(sectionId => {
                        const section = resumeSections[sectionId];
                        return (
                          <Tab.Pane key={sectionId} eventKey={sectionId}>
                            <h3 className="section-title">{section.title}</h3>
                            <ResumeForm
                              section={section}
                              data={resumeData[sectionId]}
                              onChange={handleInputChange}
                              onAdd={() => addSectionItem(sectionId)}
                              onRemove={(index) => removeSectionItem(sectionId, index)}
                            />
                          </Tab.Pane>
                        );
                      })}
                      <Tab.Pane eventKey="customize">
                        <h3 className="section-title">Customize Your Resume</h3>
                        <div className="customize-options">
                          <div className="customize-section">
                            <h4>Color Theme</h4>
                            <ColorPicker 
                              currentColor={customColor} 
                              onColorChange={handleColorChange} 
                            />
                          </div>
                          <div className="customize-section">
                            <h4>Font Style</h4>
                            <FontSelector 
                              currentFont={customFont} 
                              onFontChange={handleFontChange} 
                            />
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              
              <div className="form-actions">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="download-btn"
                  onClick={downloadResume}
                >
                  <i className="fas fa-download"></i> Download Resume
                </Button>
              </div>
            </div>
          </Col>
          
          {/* Right Side - Preview */}
          <Col lg={6} className="preview-column">
            <div className="preview-container">
              <div className="preview-header">
                <h3>Resume Preview</h3>
                <div className="preview-actions">
                  <Button variant="outline-primary" size="sm" onClick={downloadResume}>
                    <i className="fas fa-download"></i> Download
                  </Button>
                </div>
              </div>
              <div className="resume-preview-wrapper">
                <ResumePreview 
                  template={selectedTemplate}
                  data={resumeData}
                  color={customColor}
                  font={customFont}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeBuilder;
