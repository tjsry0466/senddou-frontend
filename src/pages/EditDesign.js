import React from 'react';
import Display from '../components/EditDesign/Display';
import Edit from '../components/EditDesign/Edit';
import { DisplayResumeProvider } from '../contexts/DisplayResumeContext';
import { PickProvider } from '../contexts/PickContext';
import { ResumeProvider } from '../contexts/ResumeContext';

function EditDesign() {
  return (
    <ResumeProvider>
      <PickProvider>
        <DisplayResumeProvider>
          <div className="flex p-3 max-h-screen">
            <Edit />
            <Display />
          </div>
        </DisplayResumeProvider>
      </PickProvider>
    </ResumeProvider>
  );
}

export default EditDesign;
