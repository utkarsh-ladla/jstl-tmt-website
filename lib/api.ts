export type InquiryType = 'pricing' | 'dealer' | 'project';

export interface InquiryPayload {
  type: InquiryType;
  details: Record<string, any>;
}

export const submitInquiry = async (data: InquiryPayload) => {
  const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  
  try {
    const response = await fetch(`${BACKEND_URL}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle validation errors from backend
      const errorMessage = result.errors 
        ? result.errors.map((err: any) => err.msg).join(', ') 
        : result.message || 'Submission failed';
      throw new Error(errorMessage);
    }

    return result;
  } catch (error: any) {
    console.error('API Error:', error);
    throw error;
  }
};
