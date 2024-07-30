import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

function FirstAccordion() {
  const data = [
    {
      id: 1,
      header: " detection - measurment ",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 2,
      header: " metrology - laboratory ",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 3,
      header: " robotics - automation - industrial, it ",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 4,
      header: " ellectricity- electronics ",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 5,
      header: " power transmission-mechanical components ",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 6,
      header: "hydraulics - pneumatics",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 7,
      header: "materials - tools - compnents",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 8,
      header: "machine-tools",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 9,
      header: "production machines",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 10,
      header: "industrial machines and equipment",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 11,
      header: "food industry",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 12,
      header: "packing-handling-logistics",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 13,
      header: "environment - health - safety",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
    {
      id: 14,
      header: "building - construction",
      answer: [
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
        "analytical instrumentation",
      ],
    },
  ];
  const halfway = Math.ceil(data.length / 2);
  const data1 = data.slice(0, halfway);
  const data2 = data.slice(halfway);

  return (
    <div className="accordion-container grid grid-cols-1 xl:grid-cols-2 gap-1  bg-periwinkle p-3 rounded-lg">
      <div className="accordion-group">
        <Accordion className="grid gap-1">
          {data1.map((item) => (
            <AccordionTab key={item.id} header={item.header}>
              {item.answer.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </AccordionTab>
          ))}
        </Accordion>
      </div>

      <div className="accordion-group">
        <Accordion className="grid gap-1">
          {data2.map((item) => (
            <AccordionTab key={item.id} header={item.header}>
              {item.answer.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FirstAccordion;
