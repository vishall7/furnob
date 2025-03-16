import React from "react";
import Text from "../../components/Text";
import Container from "../../components/Container";
import Seperator from "../../components/Seperator";

function CustomerReview() {
  return (
    <Container>
      <div className="mx-auto w-full md:w-5/6 mb-11 lg:mb-18">
        <Text
          as="h3"
          variant="subheading"
          className="mb-2 text-[1.75rem]/[1.17em] font-medium"
        >
          What do our customers think about us?
        </Text>
        <Text as="p" variant="description" size="md" className="lg:w-4/5">
          Aliquam vel maximus nulla. Etiam viverra nulla ac tellus auctor
          tempus. Donec euismod commodo mi, ac auctor tortor aliquam in diam
          porta hendrerit in id orci.
        </Text>
        <Seperator className="my-7 lg:my-13" />
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-5">
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-8 lg:w-3/5 lg:mt-1">
            <span className="text-[2.5rem]/10 lg:text-[3rem] font-light">4.5</span>
            <span className="flex flex-col gap-[3px]">
              <Text variant="subheading" className="text-lg/5 font-semibold">
                Taniyah Miles
              </Text>
              <Text variant="description" className="text-sm">
                Danish Morden LA
              </Text>
              <span className="text-xs mt-2">⭐⭐⭐⭐⭐</span>
            </span>            
          </div>
          <div className="">
            <Text className="text-xl/7.5 lg:text-[1.6rem]/10 lg:font-light">
              "I would also like to say thank you to all your staff. I made back
              the purchase price in just 48 hours! Absolutely wonderful! We've
              seen amazing results already."
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CustomerReview;
