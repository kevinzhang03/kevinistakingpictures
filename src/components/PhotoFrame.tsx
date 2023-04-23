import React from 'react';

// import gas_station from '../images/photographs/gas-station.jpg';

interface PhotoFrameProps {
  photo: string;
  alt: string;
  story: string;
  title?: string;
  date?: string;

  settingsDigital?: {
    camera: string;
    focalLength?: string;
    aperture?: string;
    shutterSpeed?: string;
    ISO?: number;
  } | undefined;

  settingsAnalog?: {
    camera: string;
    film: string;
    lens?: string;
  };
}

// Type guard to check if a setting is defined
function hasSetting<Type>(setting: Type | undefined): setting is Type {
  return !!setting;
}

function PhotoFrame({ photo, alt, story, title, date, settingsAnalog, settingsDigital }: PhotoFrameProps) {

  // Throw an error if both digital and analog settings are defined
  if (hasSetting(settingsDigital) && hasSetting(settingsAnalog)) {
    throw new Error('Both digital and analog settings cannot be defined at the same time.');
  }

  return (
    <div className="bg-white p-4 my-10">
      {title && (
        <h3 className="text-2xl font-medium text-center font-display mb-4">
          {title}
        </h3>
      )}
      <button>
        <img src={require('../images/photographs/sunset-calgary.jpg')} alt={alt} className="w-full" />
        {/* <img src={require(photo)} alt={alt} className="w-full" /> */}
      </button>
      <div className='font-display text-caption flex justify-between mt-1 italic opacity-50'>
        <div>
          {AnalogSettings(settingsAnalog)}
          {DigitalSettings(settingsDigital)}
        </div>
        {date && (<span>{date}</span>)}
      </div>
      <p className='mt-4'>
        {story}
      </p>
    </div>
  );
}

function AnalogSettings(settingsAnalog) {
  return (
    <div>
      {settingsAnalog && (
        <span>
          {settingsAnalog.camera}{', '}
          {settingsAnalog.film}{settingsAnalog.lens ? ', ' + settingsAnalog.lens : ''}
        </span>
      )}
    </div>
  );
}

function DigitalSettings(settingsDigital) {
  return (
    <div>
      {settingsDigital && (
        <span>
          {settingsDigital.camera}{', '}
          {settingsDigital.focalLength}{settingsDigital.focalLength ? ', ' : ''}
          {settingsDigital.aperture}{settingsDigital.aperture ? ', ' : ''}
          {settingsDigital.shutterSpeed}{settingsDigital.shutterSpeed ? ', ' : ''}
          {'ISO '}{settingsDigital.ISO}
        </span>
      )}
    </div>
  );
}

export default PhotoFrame;