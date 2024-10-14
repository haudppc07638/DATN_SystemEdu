<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $student = $this->route("student");
        $studentId = $student ? $student->id : '';
        return [
            'full_name' => 'required|string|max:100',
            'email' => [
                'required',
                'email',
                'max:100',
                'regex:/^[\w\.\-]+@fpt\.edu\.vn$/',
                Rule::unique('students')->ignore($studentId)
            ],
            'password' => $this->isMethod('post') ? [
                'required',
                'string',
                'min:8',
                'max:60',
                'regex:/^[A-Za-z0-9@]+$/'
            ] : '',
            'phone' => [
                'required',
                'max:15',
                'regex:/^0\d{9}$/',
                Rule::unique('students')->ignore($studentId)
            ],
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'code' => [
                'required',
                'string',
                'max:10',
                Rule::unique('students')->ignore($studentId)
            ],
            'faculty_id' => 'required',
            'major_id' => 'required',
            'major_class_id' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'full_name.required' => 'Họ và tên không được để trống',
            'full_name.string' => 'Họ và tên phải là một chuỗi ký tự',
            'full_name.max' => 'Họ và tên không được vượt quá 100 ký tự',

            'email.required' => 'Email không được để trống',
            'email.email' => 'Email phải là một địa chỉ email hợp lệ',
            'email.max' => 'Email không được vượt quá 100 ký tự',
            'email.regex' => 'Email phải đúng định dạng (example@fpt.edu.vn)',
            'email.unique' => 'Email đã tồn tại trong hệ thống',

            'password.required' => 'Mật khẩu không được để trống',
            'password.min' => 'Mật khẩu phải có ít nhất 8 ký tự',
            'password.max' => 'Mật khẩu không được vượt quá 60 ký tự',
            'password.regex' => 'Mật khẩu chỉ được chứa các ký tự từ A-Z, a-z, 0-9, và @',

            'phone.required' => 'Số điện thoại không được để trống',
            'phone.max' => 'Số điện thoại không được vượt quá 15 ký tự',
            'phone.unique' => 'Số điện thoại đã tồn tại trong hệ thống',
            'phone.regex' => 'Số điện thoại không đúng định dạng',

            'image.image' => 'Hình ảnh không hợp lệ',
            'image.mimes' => 'Hình ảnh phải có định dạng: jpeg, png, jpg, hoặc gif',
            'image.max' => 'Hình ảnh không được vượt quá 2MB',

            'code.required' => 'Mã sinh viên không được để trống',
            'code.string' => 'Mã sinh viên phải là một chuỗi ký tự',
            'code.max' => 'Mã sinh viên không được vượt quá 10 ký tự',
            'code.unique' => 'Mã sinh viên đã tồn tại trong hệ thống',

            'faculty_id.required' => 'Vui lòng chọn khoa',
            'major_id.required' => 'Vui lòng chọn ngành',
            'major_class_id.required' => 'Vui lòng chọn lớp chuyên ngành',  
        ];
    }
}
