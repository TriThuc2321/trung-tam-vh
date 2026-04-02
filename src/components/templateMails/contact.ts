type ContactTemplateProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const getContactTemplate = ({
  name,
  email,
  phone,
  message,
}: ContactTemplateProps) => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
  
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      <title>Contact information</title>
  
      <style>
        body {
          font-family: sans-serif;
          margin: 0;
        }
  
        p {
          margin: 8px 0;
          color: #333e48;
          line-height: 24px;
          text-align: justify;
        }
      </style>
    </head>
  
    <body>
      <table style="width: 100%; background-color: #f9eadf; padding: 60px 0">
        <tr>
          <td style="padding: 0 64px">
            <div
              style="
                border-radius: 16px;
                max-width: 600px;
                margin: 0 auto;
                height: fit-content;
                position: relative;
                padding: 24px 40px;
                box-sizing: border-box;
                background-color: #fff;
              "
            >
              <h1
                style="
                  font-weight: 700;
                  font-size: 32px;
                  width: fit-content;
                  margin: 0 auto;
                "
              >
                <span>
                  <img
                    height="32px"
                    src="https://i.imgur.com/Z7NzQwU.png"
                    alt="Avatar logo"
                /></span>
                LIÊN HỆ MỚI
              </h1>
  
              <div style="margin-top: 16px">
                <p>Bạn vừa có một yêu cầu liên hệ mới.</p>
              </div>
  
              <div
                style="
                  border-radius: 12px;
                  padding-left: 8px;
                  padding-right: 8px;
                  border-style: solid;
                  border-color: #768b9e;
                  margin-top: 16px;
                  border-width: 1px;
                "
              >
                <table style="text-align: left; font-size: 14px; width: 100%">
                  <thead style="font-size: 14px; text-transform: uppercase">
                    <tr>
                      <th
                        scope="col"
                        style="
                          white-space: nowrap;
                          padding: 12px;
                          text-align: center;
                        "
                      >
                        Họ tên
                      </th>
                      <th
                        scope="col"
                        style="
                          white-space: nowrap;
                          padding: 12px;
                          text-align: center;
                        "
                      >
                        Số điện thoại
                      </th>
                      <th
                        scope="col"
                        style="
                          white-space: nowrap;
                          padding: 12px;
                          text-align: center;
                        "
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 12px; text-align: center">${name}</td>
                      <td scope="row" style="padding: 12px; text-align: center">
                        ${phone}
                      </td>
                      <td style="padding: 12px; text-align: center">${email}</td>
                    </tr>
  
                    <tr>
                      <td
                        style="
                          white-space: nowrap;
                          padding: 12px;
                          text-align: center;
                          font-weight: 700;
                        "
                      >
                        Nội dung
                      </td>
                      <td colspan="2" style="padding: 12px 24px">${message}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

export default getContactTemplate;
