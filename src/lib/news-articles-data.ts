import type { StaticImageData } from "next/image";
import b1_0 from "@/assets/tin_tuc/b1-0.jpg";
import b1_1 from "@/assets/tin_tuc/b1-1.jpg";
import b1_2 from "@/assets/tin_tuc/b1-2.jpg";
import b3_0 from "@/assets/tin_tuc/b3-0.jpg";
import b3_1 from "@/assets/tin_tuc/b3-1.jpg";
import b3_2 from "@/assets/tin_tuc/b3-2.jpg";
import b3_3 from "@/assets/tin_tuc/b3-3.jpg";
import thumbKham from "@/assets/linh_vuc_hoat_dong/kham_test_tam_ly.jpg";

export type NewsContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "image"; src: StaticImageData; alt: string };

export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  thumbnail: StaticImageData;
  content: NewsContentBlock[];
};

/** Sắp xếp mới nhất trước (ngày giảm dần) */
export const newsArticles: NewsArticle[] = [
  {
    id: "khai-truong-trung-tam-vh",
    title:
      "Trung tâm giáo dục kỹ năng VH chính thức khai trương – dấu mốc mới cho hành trình giáo dục kỹ năng",
    excerpt:
      "Lễ khai trương Trung tâm giáo dục kỹ năng VH đánh dấu bước khởi đầu quan trọng trong hành trình mang đến chương trình giáo dục kỹ năng sống và giá trị sống toàn diện cho trẻ em và cộng đồng.",
    date: "2025-06-15",
    category: "Sự kiện",
    author: "Trung tâm VH",
    thumbnail: b1_0,
    content: [
      {
        type: "p",
        text: "Ngày 15-06-2025, Trung tâm giáo dục kỹ năng VH đã long trọng tổ chức lễ khai trương trong không khí hân hoan, ấm áp và tràn đầy kỳ vọng. Sự kiện đánh dấu bước khởi đầu quan trọng trong hành trình mang đến cho trẻ em và cộng đồng những chương trình giáo dục kỹ năng sống và giá trị sống toàn diện.",
      },
      { type: "h2", text: "Sự góp mặt của các khách mời danh dự" },
      {
        type: "p",
        text: "Buổi lễ vinh dự chào đón sự tham dự của nhiều khách mời đặc biệt:",
      },
      {
        type: "ul",
        items: [
          "Bác sĩ chuyên khoa II Thái Thị Thanh Thuỷ - Thầy thuốc ưu tú, nguyên trưởng khoa tâm lý Bệnh viện Nhi đồng 2.",
          "Bác sĩ Nguyễn Tường Thi - Chuyên khoa Tai - Mũi - Họng Bệnh viện Nhi đồng 2",
          "ThS Bác sĩ Ngô Thị Mai Trâm",
          "Bác sĩ La Mỹ Vân",
          "Thạc sĩ tâm lý Nguyễn Thị Vân",
        ],
      },
      {
        type: "p",
        text: "Sự hiện diện của các chuyên gia không chỉ thể hiện sự quan tâm sâu sắc đối với giáo dục kỹ năng, mà còn mở ra nhiều cơ hội hợp tác, chia sẻ kinh nghiệm, nhằm nâng cao chất lượng đào tạo tại trung tâm.",
      },
      {
        type: "image",
        src: b1_1,
        alt: "Khách mời và hoạt động tại sự kiện khai trương Trung tâm VH",
      },
      {
        type: "p",
        text: "Tại sự kiện, Trung tâm đã giới thiệu các lĩnh vực hoạt động:",
      },
      {
        type: "ul",
        items: [
          "Khám - test tâm lý",
          "Can thiệp sớm",
          "Giáo dục hòa nhập",
          "Giáo dục kỹ năng sống",
          "Tham vấn, điều trị tâm lý",
        ],
      },
      {
        type: "p",
        text: "Cùng với đó là sự phối hợp cùng phòng khám chuyên khoa Nhi VH care tổ chức thực hiện tham vấn - điều trị cho các trường hợp trẻ: rối loạn lo âu, trầm cảm, rối loạn chuyển dạng giới tính, khủng hoảng tuổi dậy thì, ám ảnh sợ, sang chấn tâm lý, rối loạn ăn uống, rối loạn giấc ngủ...",
      },
      { type: "h2", text: "Không gian và sứ mệnh" },
      {
        type: "p",
        text: "Trung tâm sở hữu cơ sở vật chất hiện đại, không gian mở, cùng đội ngũ chuyên môn giàu kinh nghiệm và tâm huyết. Sứ mệnh của Trung tâm là xây dựng một môi trường học tập thân thiện, sáng tạo và nuôi dưỡng tâm hồn trẻ thơ.",
      },
      {
        type: "image",
        src: b1_2,
        alt: "Không gian và cơ sở vật chất tại Trung tâm VH",
      },
      { type: "h2", text: "Lời cảm ơn" },
      {
        type: "p",
        text: "Ban tổ chức xin gửi lời cảm ơn sâu sắc tới quý đại biểu, các vị khách mời, quý phụ huynh và học viên đã đến tham dự, chung vui và dành nhiều lời chúc tốt đẹp cho sự phát triển của Trung tâm.",
      },
    ],
  },
  {
    id: "sang-loc-mam-non",
    title: "Chương trình sàng lọc rối loạn miễn phí tại trường mầm non",
    excerpt:
      "Trung tâm VH triển khai sàng lọc rối loạn phát triển miễn phí tại các trường mầm non, đồng hành cùng nhà trường và phụ huynh: phát hiện sớm – hỗ trợ kịp thời – định hướng đúng cho trẻ.",
    date: "2026-04-01",
    category: "Thông báo",
    author: "Trung tâm VH",
    thumbnail: b3_0,
    content: [
      {
        type: "p",
        text: "Những năm đầu đời là “giai đoạn vàng” để phát hiện và can thiệp sớm các khó khăn trong phát triển của trẻ. Tuy nhiên, không phải lúc nào phụ huynh hay giáo viên cũng dễ dàng nhận ra những dấu hiệu ban đầu của các rối loạn như chậm nói, tăng động, khó tập trung hay khó khăn trong tương tác xã hội.",
      },
      {
        type: "p",
        text: "Hiểu được điều đó, Trung tâm VH triển khai Chương trình sàng lọc rối loạn phát triển miễn phí tại các trường mầm non, với mong muốn đồng hành cùng nhà trường và phụ huynh trong việc phát hiện sớm – hỗ trợ kịp thời – định hướng đúng cho trẻ.",
      },
      { type: "h2", text: "Nội dung chương trình" },
      {
        type: "ul",
        items: [
          "Đánh giá bước đầu các dấu hiệu nguy cơ: chậm nói, rối loạn phổ tự kỷ, tăng động giảm chú ý…",
          "Trao đổi trực tiếp với giáo viên về đặc điểm phát triển của từng trẻ",
          "Gửi kết quả và tư vấn cụ thể đến phụ huynh",
        ],
      },
      { type: "h2", text: "Lợi ích khi tham gia" },
      {
        type: "ul",
        items: [
          "Phát hiện sớm những khó khăn tiềm ẩn của trẻ",
          "Có định hướng can thiệp phù hợp ngay từ đầu",
          "Giúp giáo viên hiểu và hỗ trợ trẻ tốt hơn trong môi trường lớp học",
          "Tạo sự kết nối chặt chẽ giữa gia đình – nhà trường – chuyên gia",
        ],
      },
      {
        type: "p",
        text: "Trung tâm VH tin rằng, mỗi đứa trẻ đều có tiềm năng riêng. Khi được thấu hiểu và hỗ trợ đúng cách, các con sẽ có cơ hội phát triển tốt nhất trong hành trình của mình.",
      },
      { type: "image", src: b3_1, alt: "Hoạt động sàng lọc và tư vấn cùng giáo viên" },
      { type: "image", src: b3_2, alt: "Đồng hành cùng phụ huynh trong chương trình" },
      { type: "image", src: b3_3, alt: "Kết nối nhà trường, gia đình và chuyên gia" },
    ],
  },
  {
    id: "sang-loc-roi-loan-phat-trien",
    title:
      "Báo cáo kết quả hoạt động Ngày hội sàng lọc rối loạn phát triển miễn phí tại Trung tâm VH",
    excerpt:
      "Tháng 3, Trung tâm VH tổ chức thành công Ngày hội sàng lọc rối loạn phát triển miễn phí — hoạt động triển khai định kỳ 3 tháng/lần nhằm hỗ trợ phụ huynh nhận diện sớm các dấu hiệu bất thường trong quá trình phát triển của trẻ.",
    date: "2026-03-01",
    category: "Tin tức",
    author: "Trung tâm VH",
    thumbnail: thumbKham,
    content: [
      {
        type: "p",
        text: "Tháng 3 vừa qua, Trung tâm VH đã tổ chức thành công Ngày hội sàng lọc rối loạn phát triển miễn phí, hoạt động được triển khai định kỳ 3 tháng/lần với mục tiêu hỗ trợ phụ huynh nhận diện sớm các dấu hiệu bất thường trong quá trình phát triển của trẻ.",
      },
      {
        type: "p",
        text: "Ngày hội đã thu hút sự quan tâm và tham gia của phụ huynh cùng các bé trong độ tuổi mầm non. Với quy trình tổ chức khoa học và chuyên nghiệp, mỗi trẻ tham gia đều được đội ngũ chuyên viên trực tiếp quan sát, tương tác và sàng lọc trên nhiều lĩnh vực phát triển.",
      },
      { type: "h2", text: "Nội dung thực hiện trong chương trình" },
      {
        type: "ul",
        items: [
          "Sàng lọc các rối loạn phát triển: chậm nói; rối loạn phổ tự kỷ; rối loạn ngôn ngữ...",
          "Đánh giá mức độ phát triển của trẻ trên các mặt kỹ năng khác nhau như: nhận thức, ngôn ngữ, vận động thô, vận động tinh, tự lập, cá nhân - xã hội...",
          "Trao đổi và tư vấn, định hướng giáo dục với phụ huynh sau quá trình sàng lọc",
        ],
      },
      {
        type: "p",
        text: "Thông qua chương trình, nhiều trường hợp trẻ có dấu hiệu cần theo dõi hoặc hỗ trợ thêm đã được phát hiện kịp thời. Phụ huynh không chỉ nhận được những nhận định ban đầu mà còn được định hướng rõ ràng về cách đồng hành cùng con trong giai đoạn tiếp theo.",
      },
      {
        type: "p",
        text: "Đặc biệt, Ngày hội không chỉ mang ý nghĩa sàng lọc mà còn là cầu nối giúp phụ huynh hiểu hơn về sự phát triển của trẻ, từ đó nâng cao nhận thức về tầm quan trọng của việc phát hiện sớm – can thiệp sớm.",
      },
      {
        type: "p",
        text: "Với những giá trị thiết thực mang lại, Trung tâm VH sẽ tiếp tục duy trì và phát triển Ngày hội sàng lọc rối loạn phát triển miễn phí định kỳ 3 tháng/lần, nhằm lan tỏa cơ hội tiếp cận dịch vụ chuyên môn đến nhiều gia đình hơn nữa.",
      },
      {
        type: "p",
        text: "Trung tâm VH tin rằng, mỗi sự phát hiện kịp thời hôm nay sẽ mở ra nhiều cơ hội tích cực cho hành trình phát triển của trẻ trong tương lai.",
      },
    ],
  },
];

export function getNewsArticleById(id: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.id === id);
}
