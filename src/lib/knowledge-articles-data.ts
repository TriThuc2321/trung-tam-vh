/** Structured blocks for /kien-thuc/[slug] article rendering */
export type KnowledgeContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type KnowledgeArticle = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  content: KnowledgeContentBlock[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "cham-noi",
    title: "Những vấn đề chung về chậm nói",
    excerpt:
      "Chậm nói là cách gọi thông thường khi trẻ nói ít, chậm hơn bạn cùng trang lứa. Bài viết giúp phụ huynh hiểu chậm phát triển ngôn ngữ, biểu hiện, yếu tố nguy cơ và dấu hiệu theo từng độ tuổi.",
    category: "Phát triển trẻ em",
    author: "Trung tâm VH",
    datePublished: "2025-10-01",
    content: [
      {
        type: "p",
        text: "Chậm nói là cách gọi thông thường của các phụ huynh khi thấy con nói ít, nói chậm hơn các bạn đồng trang lứa. Vậy chậm nói là gì? Trẻ chậm nói sẽ có biểu hiện gì?",
      },
      {
        type: "p",
        text: "Trẻ chậm nói đúng hơn là chậm phát triển ngôn ngữ là một tình trạng chậm chế trong việc đạt được các mốc phát triển ngôn ngữ so với tuổi. Trẻ có thể gặp nhiều khó khăn trong việc phát triển lời nói, sử dụng cử chỉ…",
      },
      {
        type: "p",
        text: "Ví dụ, ở độ tuổi 2 tuổi trẻ cần đạt được:",
      },
      {
        type: "p",
        text: "Về lời nói được câu 3-4 từ; trẻ hiểu một số đại từ nhân xưng như ba mẹ - con, anh chị - em…; trẻ hiểu các hành động trong tranh như: ăn bánh, ăn cơm, uống sữa, đánh răng…;",
      },
      {
        type: "p",
        text: "Và nếu ở tuổi này mà trẻ chưa đạt được các mức phát triển này thì có thể được xem xét là chậm phát triển ngôn ngữ.",
      },
      {
        type: "p",
        text: "Chậm nói cho đến nay chưa xác định được nguyên nhân, nhưng có thể có một vài nhóm yếu tố nguy cơ như:",
      },
      {
        type: "ul",
        items: [
          "Tổn thương thực thể: liên quan đến những tổn thương cơ thể trẻ như là tổn thương não bộ, tổn thương cơ quan phát âm, khả năng nghe kém...",
          "Do các rối loạn phát triển như rối loạn phổ tự kỷ thì chậm nói là một trong những khó khăn cốt lõi mà trẻ gặp phải",
          "Do thiếu hụt về môi trường tương tác và giao tiếp: như việc người lớn đáp ứng quá nhanh, quá nhiều, hoặc người lớn ít trò chuyện, để trẻ tiếp xúc với tivi điện thoại từ rất sớm.",
        ],
      },
      { type: "h2", text: "Biểu hiện của trẻ chậm nói" },
      {
        type: "p",
        text: "Đối với những trẻ chậm nói đơn thuần sẽ có dấu hiệu như:",
      },
      {
        type: "ul",
        items: [
          "Khi 12 tháng tuổi: không hoặc ít sử dụng những cử chỉ điệu bộ như gật đầu đồng ý, chỉ bằng ngón trỏ…",
          "Khi 18 tháng tuổi: Trẻ thích dùng cử chỉ hơn là lời nói để giao tiếp. Trẻ cũng không bắt chước âm thanh, lời nói của người khác.",
          "Khi 2-3 tuổi: Trẻ có thể bắt chước những âm thanh hoặc hành động nhưng không tự nói được một cách chủ động, hoặc kém khi sử dụng, hình thành cấu trúc câu mới.",
          "Khó khăn hoặc không thể tuân theo các chỉ dẫn đơn giản.",
        ],
      },
      {
        type: "p",
        text: "Đối với các trẻ chậm nói đi kèm rối loạn phát triển sẽ có thêm các biểu hiện như:",
      },
      {
        type: "ul",
        items: [
          "Suy giảm kỹ năng tương tác xã hội: Gọi tên ít đáp ứng, hạn chế giao tiếp mắt…",
          "Hành vi rập khuôn và sở thích hạn hẹp: Nhón gót, xoay tròn, chơi xếp hàng dài…",
        ],
      },
      {
        type: "p",
        text: "Việc phát hiện sớm và can thiệp sớm là yếu tố vô cùng quan trọng góp phần gia tăng hiệu quả can thiệp, thúc đẩy sự phát triển ở trẻ.",
      },
      { type: "h2", text: "Những dấu hiệu chậm nói theo từng độ tuổi" },
      {
        type: "ul",
        items: [
          "12 tháng: Trẻ chưa bập bẹ “ba ba”, “ma ma”",
          "18 tháng: Chưa nói được từ đơn có nghĩa",
          "24 tháng: Chưa nói được từ đôi (2 từ ghép)",
          "24–36 tháng: Chưa nói được cụm từ hoặc câu ngắn",
          "36–48 tháng: Chưa nói được câu hoàn chỉnh; Chưa biết đặt câu hỏi; Chưa thể mô tả sự việc đơn giản",
        ],
      },
      {
        type: "p",
        text: "Đây là những dấu hiệu quan trọng phụ huynh không nên bỏ qua.",
      },
      { type: "h2", text: "Chậm nói ảnh hưởng như thế nào đến trẻ?" },
      {
        type: "p",
        text: "Ngôn ngữ không chỉ để nói, mà còn là công cụ để trẻ giao tiếp, học tập và tư duy. Vì vậy, chậm nói có thể gây ra nhiều khó khăn:",
      },
      {
        type: "ul",
        items: [
          "Khó diễn đạt nhu cầu, cảm xúc của bản thân",
          "Hạn chế giao tiếp, tương tác xã hội",
          "Ảnh hưởng đến khả năng hiểu và tiếp thu kiến thức",
          "Dễ dẫn đến tự ti, thu mình khi lớn lên",
        ],
      },
      { type: "h2", text: "Phụ huynh cần làm gì khi nghi ngờ trẻ chậm nói?" },
      {
        type: "p",
        text: "Bước quan trọng đầu tiên là: Đưa trẻ đi thăm khám và đánh giá chuyên sâu. Việc này giúp:",
      },
      {
        type: "ul",
        items: [
          "Xác định đúng nguyên nhân (chậm nói đơn thuần hay liên quan các vấn đề phát triển khác)",
          "Đánh giá chính xác mức độ của trẻ",
          "Xây dựng lộ trình can thiệp phù hợp, cá nhân hóa",
        ],
      },
      { type: "h2", text: "Trung tâm VH – Thấu hiểu năng lực, hỗ trợ phát triển" },
      {
        type: "p",
        text: "Chúng tôi đồng hành cùng phụ huynh trong:",
      },
      {
        type: "ul",
        items: [
          "Sàng lọc – đánh giá phát triển của trẻ",
          "Tư vấn định hướng can thiệp phù hợp",
          "Can thiệp cá nhân hóa theo năng lực của từng trẻ",
        ],
      },
    ],
  },
  {
    id: "chien-luoc-von-tu",
    title: "Chiến lược cung cấp vốn từ cho trẻ chậm nói",
    excerpt:
      "Hỗ trợ tại nhà giúp củng cố ngôn ngữ giao tiếp. Trung tâm VH chia sẻ các chiến lược: cho trẻ lựa chọn, nói từng ít một, nói chậm rõ ràng, nhấn mạnh từ khóa và dùng học cụ trực quan.",
    category: "Kỹ năng làm cha mẹ",
    author: "Trung tâm VH",
    datePublished: "2025-11-01",
    content: [
      {
        type: "p",
        text: "Trong hành trình hỗ trợ trẻ phát triển ngôn ngữ, ngoài các buổi can thiệp chuyên sâu tại trung tâm, thì việc hỗ trợ tại nhà đóng vai trò vô cùng quan trọng, giúp củng cố và phát triển kỹ năng giao tiếp trong môi trường quen thuộc. Dưới đây Trung tâm VH chia sẻ với ba mẹ chiến lược cung cấp vốn từ, hỗ trợ phát triển ngôn ngữ giao tiếp tại nhà cho trẻ.",
      },
      {
        type: "h3",
        text: "Chiến lược cho trẻ quyền lựa chọn",
      },
      {
        type: "p",
        text: "Thay vì cung cấp đầy đủ cho trẻ ngay khi trẻ chưa có nhu cầu, hoặc ép trẻ làm theo ý bạn muốn, hãy cho trẻ quyền lựa chọn. Điều đó giúp trẻ chủ động, tự giác hoàn thành những yêu cầu, nhiệm vụ của bản thân, cũng tạo động lực, hứng thú để thu hút trẻ tham gia, chia sẻ cùng ba mẹ.",
      },
      {
        type: "p",
        text: "Ví dụ như đến giờ uống sữa, ba mẹ hãy cầm một ly nước và một ly sữa trước mặt trẻ và hỏi trẻ: “Con muốn uống nước hay uống sữa”, ngay khi trẻ với lấy ly nước hoặc sữa ba mẹ có thể nhắc lại để trẻ ghi nhớ: “con uống sữa”. Tương tự như vậy, ba mẹ cũng có thể hỏi trẻ con ăn cơm hay ăn bánh, con mặc áo đỏ hay áo xanh, con chơi xe ô tô hay máy bay.",
      },
      {
        type: "h3",
        text: "Chiến lược nói từng ít một",
      },
      {
        type: "p",
        text: "Khi trò chuyện cùng trẻ, hãy nói từng ít một để trẻ hiểu từng chút. Khi đưa nhiệm vụ cho trẻ hãy đưa từng nhiệm vụ nhỏ một, đừng đưa quá nhiều yêu cầu. Cùng với đó, đưa hướng dẫn hãy đưa từng ít một, gắn liền với những hình ảnh, hoặc thao tác cử chỉ để trẻ dễ dàng nắm bắt và thực hiện. Ví dụ như khi trẻ đánh răng, ba mẹ hướng dẫn con từng bước một đầu tiên là con lấy bàn chải đánh răng nha, “lấy bàn chải”, sau đó “Nặn kem” đến khi bé hoàn thành việc đánh răng. Như vậy sẽ giúp con hiểu và hình dung được các việc cần làm một cách dễ dàng nhất.",
      },
      {
        type: "h3",
        text: "Chiến lược nói chậm, rõ ràng",
      },
      {
        type: "p",
        text: "Khi trò chuyện cùng trẻ hãy nói chậm, rõ ràng, lặp đi lặp lại để trẻ có cơ hội nghe hiểu, ghi nhớ. Cùng với đó, ba mẹ nên cho trẻ thời gian để trẻ có thời gian xử lý thông tin và phản hồi. Khi trẻ muốn nói hãy khuyến khích trẻ, thể hiện ánh mắt, cử chỉ mong chờ trẻ nói. Nếu trẻ chưa nói, hãy mớm lời cho trẻ, đừng ép trẻ.",
      },
      {
        type: "h3",
        text: "Chiến lược nhấn mạnh",
      },
      {
        type: "p",
        text: "Được hiểu là khi trò chuyện với trẻ, ba mẹ hãy cố gắng để dùng những từ ngữ gần gũi với trẻ, dễ hiểu. Ba mẹ hãy nhấn mạnh vào những từ chính, để trẻ có thể nắm bắt được từ khóa hiểu, xử lý và phản hồi phù hợp. Cùng với đó, những từ mới, từ lạ với trẻ ba mẹ cũng cần nhấn mạnh và lặp đi lặp lại để trẻ nghe và ghi nhớ. Ví dụ: trong quá trình cung cấp từ cho trẻ ba mẹ đưa quả chuối ba mẹ muốn trẻ lặp lại từ chuối hoặc quả chuối.",
      },
      {
        type: "h3",
        text: "Chiến lược sử dụng hình ảnh, học cụ trực quan, cử chỉ",
      },
      {
        type: "p",
        text: "Khi trò chuyện với trẻ, hãy sử dụng thêm những hình ảnh, học cụ trực quan. Ở giai đoạn này trẻ có trí nhớ hình ảnh rất tốt, trẻ cũng phát triển tư duy trực quan hành động, và cũng ở giai đoạn này là giai đoạn hoạt động vui chơi, hành động với công cụ là hoạt động chủ đạo để phát triển tâm lý lứa tuổi. Vì vậy, để trẻ có thể hứng thú tham gia hoạt động giao tiếp cần thiết phải sử dụng học cụ trực quan như đồ dùng đồ chơi với đa dạng các chất liệu từ gỗ, nhựa, giấy… đa dạng cấu tạo như mô phỏng âm thanh, ánh sáng, … và ở đa dạng chủ đề như phương tiện giao thông, con vật, rau củ, trái cây…. Ví dụ muốn dạy cho trẻ quả táo ba mẹ sử dụng hình ảnh thẻ có quả táo, đưa trẻ đi siêu thị cho trẻ quan sát quả táo, hoặc cha mẹ cho trẻ chơi các mô hình lắp ghép quả táo.",
      },
      {
        type: "p",
        text: "Đồng hành và hỗ trợ phát triển ngôn ngữ cho trẻ chậm nói là một chặng đường dài, cần có nhiều sự kiên nhẫn tỉ mỉ, có chiến lược phù hợp. Mong rằng bài viết trên sẽ chia sẻ phần nào với ba mẹ về những kiến thức trên chặng đường ấy.",
      },
    ],
  },
  {
    id: "roi-loan-pho-tu-ky-hoa-nhap",
    title:
      "Những khó khăn của trẻ rối loạn phổ tự kỷ khi hoà nhập tiểu học",
    excerpt:
      "Bước vào tiểu học, nhiều người nghĩ trẻ đã “ổn hơn”, nhưng đây lại là giai đoạn nhiều khó khăn mới: môi trường, quan hệ xã hội và ngôn ngữ học thuật.",
    category: "Giáo dục đặc biệt",
    author: "Trung tâm VH",
    datePublished: "2025-12-01",
    content: [
      {
        type: "p",
        text: "Khi bước vào độ tuổi tiểu học, nhiều người nghĩ rằng trẻ đã “ổn hơn”, đã biết nói, biết học, biết làm theo yêu cầu… Nhưng thực tế, đây lại là giai đoạn xuất hiện rất nhiều khó khăn mới – âm thầm nhưng dai dẳng.",
      },
      { type: "h2", text: "Thứ nhất, khó thích nghi với sự thay đổi môi trường" },
      {
        type: "p",
        text: "Bước vào tiểu học, trẻ sẽ phải đối diện với sự thay đổi toàn diện lớn lao của môi trường học tập, sự khác biệt rõ rệt về hoạt động chủ đạo vui chơi ở trẻ mầm non chuyển sang hoạt động học tập. Từ được hướng dẫn tỉ mỉ, tương tác trực tiếp với giáo viên, số lượng bạn học ít sang môi trường rộng lớn, yêu cầu trẻ phải lắng nghe, phải tập trung… điều này khiến trẻ dễ bị sốc. Nhất là những thay đổi này đòi hỏi trẻ phải biết kiểm soát bản thân, biết lập kế hoạch, thời gian biểu, tuân thủ những quy định để thực hiện nhiệm vụ một cách độc lập. Vì vậy trẻ có thể thường cảm thấy lo lắng bất an khi thay đổi giáo viên, lớp học, lịch học, khó chịu khi chuyển tiết, chuyển buổi học.",
      },
      {
        type: "h2",
        text: "Thứ hai, khó khăn trong tương tác xã hội phức tạp hơn",
      },
      {
        type: "p",
        text: "Nếu ở mầm non, can thiệp các mối quan hệ sẽ xoay quanh những người quen thuộc như cô giáo, bạn bè của trẻ thì bước sang cấp tiểu học trẻ sẽ phải đối diện với nhiều mối quan hệ mới phức tạp hơn. Cùng với việc mở rộng các mối quan hệ trẻ cũng cần phải hiểu được những quy định ngầm, vai trò của từng người. Điều này đòi hỏi trẻ phải hiểu được các quy tắc giao tiếp, có kỹ năng giải quyết xung đột… Trẻ rất dễ trở thành đối tượng bị cô lập, bị bắt nạt học đường.",
      },
      { type: "h2", text: "Thứ ba, trẻ gặp khăn trong việc hiểu kiến thức" },
      {
        type: "p",
        text: "Trẻ có thể đọc trôi chảy, trả lời được câu hỏi đơn giản, nhưng đây là giai đoạn trẻ làm quen và sử dụng nhiều ngôn ngữ học thuật, đòi hỏi khả năng hiểu khái niệm trừu tượng, suy luận, diễn đạt có cấu trúc, tư duy mạch lạc…",
      },
      { type: "h3", text: "Một số biểu hiện thường gặp ở trẻ:" },
      {
        type: "ul",
        items: [
          "Trẻ đọc được, nhưng không hiểu được nội dung mình đọc, không nắm được ý chính của bài học,",
          "Trẻ khó trả lời các câu hỏi suy luận như tại sao? Như thế nào?",
          "Trẻ gặp khó khăn trong việc tóm tắt, trình bày, phân tích, diễn giải nhất là khi gặp phải các bài tập làm văn.",
          "Trẻ gặp khó khăn khi phải hiểu từ theo nhiều nghĩa, theo các biện pháp so sánh, ẩn dụ, hàm ý….",
        ],
      },
      {
        type: "p",
        text: "Khi chương trình học càng cao, kiến thức càng nhiều càng dễ khiến trẻ “đuối sức” và bùng nổ những hành vi cảm xúc không phù hợp.",
      },
    ],
  },
];
