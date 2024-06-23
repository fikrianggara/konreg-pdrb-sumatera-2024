import React from "react";

const MATERIS: any[] = [];

export default function pages() {
  return MATERIS.length > 0 ? (
    <div>
      {MATERIS.map((m) => (
        <div>{m.toString()}</div>
      ))}
    </div>
  ) : (
    <div>belum ada materi</div>
  );
}
