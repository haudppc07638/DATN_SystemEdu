<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class SubjectLecturerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'subject_id' => 'required|exists:subjects,id',
            'employee_ids' => 'required|array',
            'employee_ids.*' => 'exists:employees,id',
        ];
    }

    public function messages(): array
    {
        return [
            'subject_id.required' => 'Mã môn học là thông tin bắt buộc.',
            'subject_id.exists' => 'Không tìm thấy mã môn học này.',
            'employee_ids.required' => 'Mã giảng viên là thông tin bắt buộc.',
            'employee_ids.array' => 'Mã giảng viên phải được cung cấp dưới dạng mảng.',
            'employee_ids.*.exists' => 'Không tìm thấy mã giảng viên này.',
        ];
    }
}
