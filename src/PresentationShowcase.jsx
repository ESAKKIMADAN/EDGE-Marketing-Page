import React from 'react';

const specifications = [
  { label: 'Device Type', value: 'Rollable Smartphone' },
  { label: 'Build Material', value: 'Aerospace Grade Titanium Alloy Frame + Carbon Fiber Internal Structure + Ceramic Shield Glass' },
  { label: 'Dimensions (Closed)', value: '163.6 × 78.1 × 7.9 mm' },
  { label: 'Dimensions (Expanded)', value: '158.4 × 143.2 × 4.2 mm' },
  { label: 'Weight', value: '216 g' },
  { label: 'Water & Dust Resistance', value: 'IP68 + Rollable Mechanism Dust Protection' },
  { label: 'Operating System', value: 'Android 17 (EDGE OS based on Android)' },
  { label: 'Processor', value: 'Qualcomm Snapdragon 8 Elite Gen 2 (3nm)' },
  { label: 'GPU', value: 'Adreno 840' },
  { label: 'RAM', value: '16 GB / 24 GB LPDDR5X' },
  { label: 'Storage', value: '512 GB / 1 TB / 2 TB UFS 4.1' },
  { label: 'Expandable Storage', value: 'No' }
];

export default function PresentationShowcase() {
  return (
    <section className="specs-dashboard-container" id="specs">
      <div className="specs-dashboard-card presentation-card">
        {/* Title */}
        <h4 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', textAlign: 'center', margin: '0 0 10px 0' }}>
          Specifications & Capabilities
        </h4>

        {/* Specs Layout */}
        <div className="specs-layout">
          {/* Table Column */}
          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>EDGE Rollable Details</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Capabilities Column */}
          <div className="specs-capabilities-wrapper">
            <div className="capability-card">
              <h5>
                144 FPS Gaming Power
              </h5>
              <p>
                Users can play any game smoothly at 144 FPS. Supported by bypass charging where the electrical power bypasses the battery and goes directly into the GPU, delivering a cooler, more efficient gaming experience.
              </p>
            </div>

            <div className="capability-card">
              <h5>
                LTPO AMOLED 2X Display
              </h5>
              <p>
                Featuring a high-fidelity Dynamic LTPO AMOLED 2X, HDR10+ rolling panel. It rolls out seamlessly and retains the absolute highest display color accuracy and responsiveness, serving as the segment's best display.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
