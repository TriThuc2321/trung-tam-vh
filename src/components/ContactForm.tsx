"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: "", phone, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <svg className="mx-auto mb-4 h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h3 className="mb-2 text-lg font-semibold text-green-800">Gửi thành công!</h3>
        <p className="text-sm text-green-700">
          Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 rounded-full bg-green-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
        >
          Gửi thông tin khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập họ và tên"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium">
          SĐT / Zalo phụ huynh <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Nhập số điện thoại"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Nội dung đăng ký tư vấn <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mô tả ngắn gọn nhu cầu tư vấn của bạn"
          className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Đang gửi..." : "Gửi thông tin"}
      </button>
    </form>
  );
}
