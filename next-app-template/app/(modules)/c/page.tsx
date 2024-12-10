"use client";

import React from "react";

import { Tabs, Tab, Chip, Button } from "@nextui-org/react";
import Image from "next/image";

const ButtonPage = () => {
  let isLoading: boolean = false;

  function handleClick() {
    console.log("Button clicked");

    isLoading = true;
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  }

  return (
    <div>
      CandidatesPage
      <hr />
      <Button
        color="primary"
        size="lg"
        radius="lg"
        onClick={handleClick}
        isLoading={isLoading}
      >
        Click Me!
      </Button>
      <hr />
      <Tabs
        key="candidate_details"
        aria-label="Tabs radius"
        radius="sm"
        variant="solid"
        placement="start"
      >
        <Tab
          key="summary"
          title={
            <div className="flex items-start space-x-2 alig">
              <Image
                className="w-6 h-6 gap-2 text-blue-300-900"
                src="/candidates.svg"
                alt="Summary"
                width={24}
                height={24}
              />
              <span>Summary</span>
            </div>
          }
        >
          <ol>
            <li>Profile Strength</li>
            <li>Verifications</li>
          </ol>
        </Tab>
        <Tab
          key="overview"
          title={
            <div className="flex items-start space-x-2 alig">
              <Image
                className="w-6 h-6 gap-2 text-blue-300-900"
                src="/candidates.svg"
                alt="Overview"
                width={24}
                height={24}
              />
              <span>Overview</span>
            </div>
          }
        >
          <ol>
            <li>Photo</li>
            <li>Summary</li>
          </ol>
        </Tab>
        <Tab
          key="skills"
          title={
            <div className="flex items-start space-x-2 alig">
              <Image
                className="w-6 h-6 gap-2 text-blue-300-900"
                src="/candidates.svg"
                alt="Overview"
                width={24}
                height={24}
              />
              <span>Skills</span>
            </div>
          }
        >
          <div>
            <Tabs
              aria-label="Options"
              classNames={{
                tabList:
                  "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#22d3ee]",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-[#06b6d4]",
              }}
              color="primary"
              variant="underlined"
            >
              <Tab
                key="technical_skills"
                title={
                  <div className="flex items-center space-x-2">
                    <Image
                      className="w-6 h-6 gap-2 text-blue-300-900"
                      src="/candidates.svg"
                      alt="Overview"
                      width={24}
                      height={24}
                    />
                    <span>Technical</span>
                    <Chip size="sm" variant="faded">
                      9
                    </Chip>
                  </div>
                }
              />
              <Tab
                key="functional_skills"
                title={
                  <div className="flex items-center space-x-2">
                    <Image
                      className="w-6 h-6 gap-2 text-blue-300-900"
                      src="/candidates.svg"
                      alt="Overview"
                      width={24}
                      height={24}
                    />
                    <span>Functional</span>
                    <Chip size="sm" variant="faded">
                      3
                    </Chip>
                  </div>
                }
              />
              <Tab
                key="soft_skills"
                title={
                  <div className="flex items-center space-x-2">
                    <Image
                      className="w-6 h-6 gap-2 text-blue-300-900"
                      src="/candidates.svg"
                      alt="Overview"
                      width={24}
                      height={24}
                    />
                    <span>Soft</span>
                    <Chip size="sm" variant="faded">
                      1
                    </Chip>
                  </div>
                }
              />
              <Tab
                key="domain_skills"
                title={
                  <div className="flex items-center space-x-2">
                    <Image
                      className="w-6 h-6 gap-2 text-blue-300-900"
                      src="/candidates.svg"
                      alt="Domain"
                      width={24}
                      height={24}
                    />
                    <span>Domain</span>
                    <Chip size="sm" variant="faded">
                      1
                    </Chip>
                  </div>
                }
              />
            </Tabs>
          </div>
          <ol>
            <li>Technical</li>
            <li>Functional</li>
            <li>Soft</li>
            <li>Domain</li>
          </ol>
        </Tab>
        <Tab key="experience" title="Experience">
          <ol>
            <li>Overall Timeline</li>
            <li>Highlights</li>
            <li>Gray Areas</li>
          </ol>
        </Tab>
        <Tab key="documents" title="Documents"></Tab>
        <Tab key="collaboration" title="Collaboration">
          All collaborations will go here
        </Tab>
      </Tabs>
    </div>
  );
};

export default ButtonPage;
