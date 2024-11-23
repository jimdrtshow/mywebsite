"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Test() {
  const [like, setLike] = React.useState(0);
  return (
    <div>
      <Button
        onClick={() => setLike(like + 1)}
        className=" rounded-full border-none text-black "
        variant="secondary"
      >
        j'ai {like} like(s)
      </Button>
    </div>
  );
}
