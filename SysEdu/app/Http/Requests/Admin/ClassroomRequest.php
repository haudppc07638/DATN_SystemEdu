<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class ClassroomRequest extends FormRequest
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
        $classroom = $this->route('classroom');
        $classroomId = $classroom ? $classroom->id : null;
       
        return [
            'code' => ['required', 'string', 'max:20', Rule::unique('classrooms')->ignore($classroomId)],
        ];
    }

    public function messages(): array
    {
        return [
            'code.required' => 'Mã phòng học không được để trống',
            'code.string' => 'Mã phòng học phải là một chuỗi ký tự',
            'code.max' => 'Mã phòng học không được vượt quá 20 ký tự',
            'code.unique' => 'Mã phòng học đã tồn tại',
        ];
    }
}
