<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SubjectRequest extends FormRequest
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
        $subject = $this->route('subject');
        $subjectId = $subject ? $subject->id : null;

        return [
            'name' => 'required|string|max:100',
            'code' => ['required', 'string', 'max:20' , Rule::unique('subjects')->ignore($subjectId)],
            'credit' => 'required|numeric|max:6|min:1',
            'description' => 'required|string|max:500',
            'faculty_id' => 'required',
            'major_id' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Tên môn học không được để trống !',
            'name.string' => 'Tên môn học phải là 1 chuỗi !',
            'name.max' => 'Tên môn học không được quá 100 ký tự !',

            'code.required' => 'Mã môn học không được để trống !',
            'code.string' => 'Mã môn học phải là chuỗi !',
            'code.max' => 'Mã môn học không được quá 20 ký tự !',
            'code.unique' => 'Mã môn học đã tồn tại !',

            'credit.required' => 'Số tín chỉ không được để trống !',
            'credit.numeric' => 'Số tín chỉ phải là số !',
            'credit.max' => 'Số tín chỉ không được quá 6 !',
            'credit.min' => 'Số tín chỉ phải ít nhất 1 !',

            'description.required' => 'Mô tả không được để trống !',
            'description.string' => 'Mô tả phải là 1 chuỗi !',
            'description.max'=> 'Mô tả không được quá 500 ký tự !',

            'faculty_id'=> 'Vui lòng chọn khoa !',
            'major_id.required'=> 'Vui lòng chọn chuyên ngành !',
        ];
    }
}
