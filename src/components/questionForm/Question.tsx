"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { questionSchema } from "@/lib/validation";
import Image from "next/image";
import { Badge } from "../ui/badge";

export function Question() {
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });

  // 2. Define a submit handler
  function onSubmit(values: z.infer<typeof questionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, field: any) {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue.length > 0) {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            required: true,
            message: "The tag length must be less than 15 chracters",
          });
        }

        if (!field.value.includes(tagValue)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        } else {
          form.trigger();
        }
      }
    }
  }
  return (
    <div className="text-dark300_light900">
      <div className="h3-bold max-md:h4-bold font_spaceGrotesk mb-10  text-primary-500 ">
        Ask a Question
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="background_dark">
                  <p className="font-semibold mb-6">
                    Question Title <span className="text-primary-500">*</span>
                  </p>
                </FormLabel>
                <FormControl className="background-light700_dark400 border-none">
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  Be specific and imagine you 're asking this question to answer
                  person
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="background_dark">
                  <p className="font-semibold mb-6">
                    Detailed explaination of your problem?{" "}
                    <span className="text-primary-500">*</span>
                  </p>
                </FormLabel>
                <FormControl className="background-light700_dark400 border-none">
                  <Editor
                    className="background-light700_dark400 border-none"
                    apiKey="zeajr1m3fguf3uo2laivvksc4o5qcvwrsoum1yczdrxouwne"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "print",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "codesample | bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Inter,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Be specific and imagine you 're asking this question to answer
                  person
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="background_dark">
                  <p className="font-semibold mb-6">
                    Tags <span className="text-primary-500">*</span>
                  </p>
                </FormLabel>
                <FormControl className="background-light700_dark400 border-none">
                  <>
                    <Input
                      placeholder="shadcn"
                      className="background-light700_dark400 border-none"
                      onKeyDown={(e) => handleKeyDown(e, field)}
                    />
                    <div className="flex flex-start gap-2.5">
                      {field.value.length > 0 &&
                        field.value.map((tag) => {
                          return (
                            <Badge
                              key={tag}
                              className="flex justify-between items-center subtle-medium"
                            >
                              <div>{tag}</div>
                              <div>
                                <Image
                                  src="/assets/icons/close.svg"
                                  width={16}
                                  height={16}
                                  alt="close"
                                  className="invert-0 black:invert object-contian cursor-pointer"
                                />
                              </div>
                            </Badge>
                          );
                        })}
                    </div>
                  </>
                </FormControl>
                <FormDescription>
                  Add up to 5 tags to describe what your question is all about
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-end">
            <Button className="primary-gradient text-white" type="submit">
              Ask Question
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
