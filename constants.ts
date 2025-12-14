import { QuizData, Question } from './types';

// Data extracted from the provided PDF screenshots
const GAME_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Khi bắt đầu một nhiệm vụ quan trọng, điều đầu tiên con làm là gì?",
    options: [
      { id: 'A', text: "Kiểm tra kỹ từng nút bấm, cần điều khiển của máy bay để chắc chắn mọi thứ hoạt động hoàn hảo." },
      { id: 'B', text: "Nghiên cứu các báo cáo cũ để phân tích các kiểu bay và chiến thuật của đối phương." },
      { id: 'C', text: "Xem lại bản đồ không phận, các quy tắc liên lạc và kế hoạch bay tổng thể của cả đội." },
    ]
  },
  {
    id: 2,
    question: "Một vật thể bay không xác định đột ngột xuất hiện trên radar. Phản ứng đầu tiên của con là:",
    options: [
      { id: 'A', text: "Ngay lập tức chuẩn bị vũ khí và sẵn sàng hành động theo lệnh." },
      { id: 'B', text: "Giữ khoảng cách an toàn, quan sát quỹ đạo di chuyển của nó để dự đoán ý đồ." },
      { id: 'C', text: "Báo cáo ngay lập tức vị trí của nó cho sở chỉ huy theo đúng quy trình." },
    ]
  },
  {
    id: 3,
    question: "Con được trang bị một loại tên lửa mới. Con sẽ ưu tiên làm gì?",
    options: [
      { id: 'A', text: "Bắn thử ngay để xem tốc độ, sức công phá và độ giật của nó ra sao." },
      { id: 'B', text: "Suy nghĩ xem loại tên lửa này có thể dùng để tạo ra những chiến thuật bất ngờ nào mà đối phương không lường tới." },
      { id: 'C', text: "Đọc kỹ tài liệu hướng dẫn sử dụng và các quy tắc an toàn trước khi tích hợp vào hệ thống." },
    ]
  },
  {
    id: 4,
    question: "Khi đối mặt với một phi đội địch đông hơn hẳn, con sẽ:",
    options: [
      { id: 'A', text: "Tập trung tối đa vào kỹ năng bay lượn và bắn hạ từng mục tiêu một cách hiệu quả nhất." },
      { id: 'B', text: "Tìm điểm yếu trong đội hình của địch, ví dụ như con bay đầu đàn hoặc con bay ở vị trí lẻ." },
      { id: 'C', text: "Yêu cầu viện trợ và lùi về vị trí phòng thủ đã được định sẵn trong kế hoạch." },
    ]
  },
  {
    id: 5,
    question: "Sau khi hoàn thành nhiệm vụ, con thích làm gì nhất?",
    options: [
      { id: 'A', text: "Xem lại băng ghi hình để phân tích các thao tác lái của mình, xem có thể làm tốt hơn ở đâu." },
      { id: 'B', text: "Nghiên cứu lại cách di chuyển của địch để rút kinh nghiệm, lần sau không bị bất ngờ nữa." },
      { id: 'C', text: "Đối chiếu kết quả (số địch hạ, tổn thất) với mục tiêu nhiệm vụ đã đề ra ban đầu." },
    ]
  },
  {
    id: 6,
    question: "Nếu được tự thiết kế một bài tập huấn luyện, con sẽ tập trung vào việc:",
    options: [
      { id: 'A', text: "Tạo ra một chiếc máy bay mô phỏng có cảm giác lái và hệ thống vũ khí 'thật' nhất có thể." },
      { id: 'B', text: "Thiết kế một 'máy bay địch thông minh' có thể học hỏi và thích nghi với người chơi." },
      { id: 'C', text: "Xây dựng một hệ thống tính điểm, xếp hạng và các cấp độ nhiệm vụ rõ ràng, công bằng." },
    ]
  },
  {
    id: 7,
    question: "Thời tiết đột nhiên chuyển xấu, sương mù dày đặc. Con sẽ làm gì?",
    options: [
      { id: 'A', text: "Tìm cách tinh chỉnh hệ thống radar và cảm biến trên máy bay để nhìn rõ hơn trong sương mù." },
      { id: 'B', text: "Lợi dụng mây và địa hình để ẩn nấp và tạo ra một cuộc phục kích bất ngờ nếu cần." },
      { id: 'C', text: "Bay theo đường bay an toàn đã được vạch sẵn cho thời tiết xấu và chờ chỉ thị mới." },
    ]
  },
  {
    id: 8,
    question: "Khi phối hợp cùng một đồng đội, con nghĩ điều gì là quan trọng nhất?",
    options: [
      { id: 'A', text: "Tin tưởng đồng đội làm tốt việc của họ, còn mình sẽ tập trung hoàn thành xuất sắc nhiệm vụ của mình." },
      { id: 'B', text: "Bàn với đồng đội một kế hoạch 'gọng kìm', mình dụ địch còn bạn tấn công để tạo hiệu quả cao nhất." },
      { id: 'C', text: "Thống nhất các kênh liên lạc, mật mã và quy tắc phối hợp rõ ràng trước khi cất cánh." },
    ]
  },
  {
    id: 9,
    question: "Con đã hết đạn nhưng kẻ địch vẫn còn. Con sẽ chọn giải pháp nào?",
    options: [
      { id: 'A', text: "Sử dụng chính thân máy bay để 'chèn ép', lùa địch vào vùng nguy hiểm cho đồng đội xử lý." },
      { id: 'B', text: "Thực hiện các động tác giả vờ tấn công, khiến địch phải né tránh và để lộ sơ hở." },
      { id: 'C', text: "Báo cáo tình hình và yêu cầu cho phép quay về căn cứ để nạp thêm đạn dược theo quy định." },
    ]
  },
  {
    id: 10,
    question: "Khẩu hiệu nào thể hiện đúng nhất con người con?",
    options: [
      { id: 'A', text: "\"Hành động chính xác, kết quả tức thì.\"" },
      { id: 'B', text: "\"Luôn đi trước đối thủ một bước.\"" },
      { id: 'C', text: "\"Mọi thứ phải trong tầm kiểm soát.\"" },
    ]
  },
];

const WEB_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Khi bắt đầu xây dựng một trang web mới, điều đầu tiên bạn nghĩ đến là gì?",
    options: [
      { id: 'A', text: "Mình sẽ sắp xếp các thư mục và file (HTML, CSS, JS) như thế nào cho hợp lý." },
      { id: 'B', text: "Trang web này sẽ giúp ai? Và mục tiêu cuối cùng của nó là gì (bán hàng, cung cấp thông tin,...)?" },
      { id: 'C', text: "Trang web này sẽ mang lại cảm giác gì cho người xem? Phong cách chủ đạo sẽ là gì (vui vẻ, chuyên nghiệp, nghệ thuật,...)?" },
    ]
  },
  {
    id: 2,
    question: "Theo bạn, phần quan trọng nhất của một trang web bán hàng là gì?",
    options: [
      { id: 'A', text: "Trang web phải chạy thật nhanh, bấm vào đâu là phản hồi ngay lập tức." },
      { id: 'B', text: "Nút \"Mua Ngay\" hoặc \"Thêm vào giỏ hàng\" phải thật to, rõ ràng và dễ thấy." },
      { id: 'C', text: "Hình ảnh sản phẩm phải thật đẹp, sắc nét và phần mô tả phải thật hấp dẫn." },
    ]
  },
  {
    id: 3,
    question: "Một người dùng nói rằng \"trang web của bạn khó dùng quá\". Phản ứng đầu tiên của bạn là:",
    options: [
      { id: 'A', text: "Kiểm tra lại code xem có lỗi logic nào khiến các nút bấm không hoạt động đúng không." },
      { id: 'B', text: "Hỏi họ: \"Cụ thể là bạn đang muốn làm gì mà không được ạ?\" để hiểu mục tiêu của họ." },
      { id: 'C', text: "Xem lại cách sắp xếp bố cục và câu chữ hướng dẫn, có thể chúng chưa đủ rõ ràng." },
    ]
  },
  {
    id: 4,
    question: "Khi chọn màu sắc cho trang web, bạn sẽ ưu tiên tiêu chí nào?",
    options: [
      { id: 'A', text: "Các màu phải có độ tương phản tốt để người dùng dễ đọc chữ, không bị mỏi mắt." },
      { id: 'B', text: "Sử dụng các màu sắc đã được chứng minh là có thể kích thích người dùng mua hàng hoặc hành động." },
      { id: 'C', text: "Chọn một bảng màu thể hiện đúng cá tính của thương hiệu hoặc \"mood\" của bài viết." },
    ]
  },
  {
    id: 5,
    question: "Nếu được thêm một tính năng cho trang web, bạn sẽ chọn làm gì?",
    options: [
      { id: 'A', text: "Xây dựng một nút bấm có hiệu ứng animation (hoạt ảnh) thật mượt mà khi người dùng bấm vào." },
      { id: 'B', text: "Thêm một mục \"Sản phẩm bán chạy nhất\" để thuyết phục khách hàng mới mua hàng." },
      { id: 'C', text: "Tạo một khu vực \"Thư viện ảnh\" (Gallery) để trưng bày những hình ảnh đẹp nhất." },
    ]
  },
  {
    id: 6,
    question: "Khi viết nội dung cho trang web, bạn quan tâm nhất điều gì?",
    options: [
      { id: 'A', text: "Cấu trúc các thẻ tiêu đề (H1, H2, H3) phải thật rõ ràng và chuẩn SEO để Google dễ đọc." },
      { id: 'B', text: "Tiêu đề phải thật \"kêu\", giải quyết được vấn đề của khách hàng để họ bấm vào xem ngay." },
      { id: 'C', text: "Câu chữ phải trau chuốt, lôi cuốn và thể hiện được phong cách riêng của mình." },
    ]
  },
  {
    id: 7,
    question: "Trang web của đối thủ trông rất đẹp. Điều đầu tiên bạn làm là:",
    options: [
      { id: 'A', text: "Bấm chuột phải chọn \"Kiểm tra phần tử\" để xem họ đã dùng những công nghệ hay đoạn code nào thú vị." },
      { id: 'B', text: "Phân tích xem họ đang nhắm đến đối tượng khách hàng nào và chiến lược kinh doanh của họ là gì." },
      { id: 'C', text: "Lưu lại những điểm minh thích về cách họ dùng font chữ, hình ảnh để lấy cảm hứng." },
    ]
  },
  {
    id: 8,
    question: "Khi nhận được phản hồi về trang web của mình, bạn thích nghe điều gì nhất?",
    options: [
      { id: 'A', text: "\"Wow, trang của bạn load nhanh thật, bấm vào đâu cũng không phải chờ!\"" },
      { id: 'B', text: "\"Nhờ trang web của bạn mà tôi đã giải quyết được vấn đề của mình!\"" },
      { id: 'C', text: "\"Trang web của bạn có thiết kế thật tinh tế và đẹp mắt!\"" },
    ]
  },
  {
    id: 9,
    question: "Khi một tính năng bị lỗi, bạn cảm thấy thế nào?",
    options: [
      { id: 'A', text: "Hứng thú! Đây là một bài toán logic cần được giải quyết." },
      { id: 'B', text: "Lo lắng! Điều này có thể ảnh hưởng đến trải nghiệm của khách hàng và doanh thu." },
      { id: 'C', text: "Khó chịu! Lỗi này làm hỏng mất vẻ hoàn hảo của tổng thể trang web." },
    ]
  },
  {
    id: 10,
    question: "Khẩu hiệu nào thể hiện đúng nhất con người bạn?",
    options: [
      { id: 'A', text: "\"Mọi thứ đều có thể giải quyết bằng logic.\"" },
      { id: 'B', text: "\"Bắt đầu từ mục tiêu của khách hàng.\"" },
      { id: 'C', text: "\"Nội dung là Vua, Cảm xúc là Nữ hoàng.\"" },
    ]
  },
];

export const QUIZ_DATA: QuizData = {
  game: GAME_QUESTIONS,
  web: WEB_QUESTIONS,
};
