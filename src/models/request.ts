interface Request {
     headers: {
          [key: string]: string;
     };
     method: string;
     url: string;
     body: any;
}

export default Request;
