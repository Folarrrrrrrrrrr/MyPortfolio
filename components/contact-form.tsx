
"use client";



import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";



export function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{

    type: "success" | "error";

    message: string;

  } | null>(null);



  async function handleSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    setIsSubmitting(true);

    setStatus(null);



    const form = event.currentTarget;

    const formData = new FormData(form);



    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

          name: formData.get("name"),

          email: formData.get("email"),

          message: formData.get("message"),

          company: formData.get("company"),

        }),

      });

      const result: { error?: string } = await response.json();



      if (!response.ok) {

        setStatus({

          type: "error",

          message: result.error ?? "Your message could not be sent. Please try again.",

        });

        return;

      }



      form.reset();

      setStatus({

        type: "success",

        message: "Your message has been sent. Thank you for reaching out!",

      });

    } catch {

      setStatus({

        type: "error",

        message: "Unable to send your message right now. Please try again later.",

      });

    } finally {

      setIsSubmitting(false);

    }

  }



  return (

    <form className="grid gap-6" onSubmit={handleSubmit}>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="space-y-2">

          <label

            htmlFor="name"

            className="text-xs font-mono text-muted-foreground"

          >

            NAME

          </label>

          <Input

            id="name"

            name="name"

            autoComplete="name"

            placeholder="John Doe"

            maxLength={120}

            required

          />

        </div>

        <div className="space-y-2">

          <label

            htmlFor="email"

            className="text-xs font-mono text-muted-foreground"

          >

            EMAIL

          </label>

          <Input

            id="email"

            name="email"

            type="email"

            autoComplete="email"

            placeholder="john@example.com"

            maxLength={254}

            required

          />

        </div>

      </div>

      <div className="space-y-2">

        <label

          htmlFor="message"

          className="text-xs font-mono text-muted-foreground"

        >

          MESSAGE

        </label>

        <Textarea

          id="message"

          name="message"

          placeholder="Enter your message..."

          className="min-h-[150px]"

          maxLength={5000}

          required

        />

      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">

        <label htmlFor="company">Leave this field empty</label>

        <input

          id="company"

          name="company"

          type="text"

          tabIndex={-1}

          autoComplete="off"

        />

      </div>

      {status && (

        <p

          role={status.type === "error" ? "alert" : "status"}

          className={

            status.type === "error"

              ? "text-sm text-destructive"

              : "text-sm text-primary"

          }

        >

          {status.message}

        </p>

      )}

      <Button

        type="submit"

        className="w-full"

        size="lg"

        disabled={isSubmitting}

      >

        {isSubmitting ? "SENDING..." : "SEND TRANSMISSION"}

      </Button>

    </form>

  );

} 