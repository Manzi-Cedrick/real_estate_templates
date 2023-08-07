import React, { FC, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import CommonLayout from "./CommonLayout";
import { text } from "stream/consumers";

export interface PageAddListing5Props { }

const PageAddListing5: FC<PageAddListing5Props> = () => {
  const [additionalRulesList, setAdditionalRulesList] = useState<string[]>([
    "No smoking in common areas",
    "Do not wear shoes/shoes in the house",
    "No cooking in the bedroom",
  ]);
  const [additionalRule, setAdditionalRule] = useState<string>("");

  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center" >
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          onChange={(e) => console.log(name, " : ", id)}
          type="radio"
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <label
          htmlFor={id + name}
          className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  };

  const addRule = () => {
    if (additionalRule == "") return;
    else {
      setAdditionalRulesList([...additionalRulesList, additionalRule]);
      setAdditionalRule("")
    }
  }

  const deleteItem = (text: string) => {
    setAdditionalRulesList(additionalRulesList.filter(item => item != text))
  }

  const renderNoInclude = (text: string, index: number) => {
    console.log(text)
    return (
      <div className="flex items-center justify-between py-3" key={index}>
        <span className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </span>
        <i onClick={() => deleteItem(text)} className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"></i>
      </div>
    );
  };

  return (
    <CommonLayout
      index="05"
      backtHref="/add-listing-4"
      nextHref="/add-listing-6"
    >
      <>
        <div>
          <h2 className="text-2xl font-semibold">
            Set house rules for your guests{" "}
          </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Guests must agree to your house rules before they book.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          {/* ITEM */}
          <div>
            <label className="text-lg font-semibold" htmlFor="">
              General amenities
            </label>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Smoking", "Do", "Do not allow")}
              {renderRadio("Smoking", "Allow", "Allow", true)}
              {renderRadio("Smoking", "Charge", "Charge")}
            </div>
          </div>

          {/* ITEM */}
          <div>
            <label className="text-lg font-semibold" htmlFor="">
              Pet
            </label>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Pet", "Do", "Do not allow")}
              {renderRadio("Pet", "Allow", "Allow", true)}
              {renderRadio("Pet", "Charge", "Charge")}
            </div>
          </div>

          {/* ITEM */}
          <div>
            <label className="text-lg font-semibold" htmlFor="">
              Party organizing
            </label>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Partyorganizing", "Do", "Do not allow")}
              {renderRadio("Partyorganizing", "Allow", "Allow", true)}
              {renderRadio("Partyorganizing", "Charge", "Charge")}
            </div>
          </div>

          {/* ITEM */}
          <div>
            <label className="text-lg font-semibold" htmlFor="">
              Cooking
            </label>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {renderRadio("Cooking", "Do", "Do not allow")}
              {renderRadio("Cooking", "Allow", "Allow", true)}
              {renderRadio("Cooking", "Charge", "Charge")}
            </div>
          </div>

          {/* ----------- */}
          <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
          <span className="block text-lg font-semibold">Additional rules</span>
          <div className="flow-root">
            <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
              {
                additionalRulesList.map((item, index) => {
                  return renderNoInclude(item, index);
                })
              }
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
            <Input className="!h-full" placeholder="No smoking..." value={additionalRule} onChange={(e) => setAdditionalRule(e.target.value)} />
            <ButtonPrimary className="flex-shrink-0" onClick={() => addRule()}>
              <i className="text-xl las la-plus"></i>
              <span className="ml-3">Add tag</span>
            </ButtonPrimary>
          </div>
        </div>
      </>
    </CommonLayout>
  );
};

export default PageAddListing5;
