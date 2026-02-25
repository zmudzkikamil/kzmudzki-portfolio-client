import React from "react";
import { ViewLayout } from "@/layout/view-layout";
import {
  Header,
  HeaderTitle,
  HeaderSubtitle,
} from "@/shared/components/header";
import { ContactForm } from "./components/contact-form";

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <ViewLayout mode="primary">
      <Header className="pt-28 space-y-4">
        <HeaderTitle>Get in touch</HeaderTitle>
        <HeaderSubtitle text="Have a project in mind or just want to say hello? Drop me a message." />
      </Header>
      <main className="mt-10 pb-16">
        <ContactForm />
      </main>
    </ViewLayout>
  );
};

export default Contact;
