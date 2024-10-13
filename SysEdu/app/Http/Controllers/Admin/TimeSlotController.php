<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TimeSlotRequest;
use App\Models\TimeSlot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TimeSlotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $timeSlots = TimeSlot::search($search)->latestPaginate($limit);

        return Inertia::render('Admin/TimeSlots/Show', [
            'timeSlots' => $timeSlots,
            'limit' => $limit,
            'search' => $search,
            'currentPage' => $page  
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/TimeSlots/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TimeSlotRequest $request)
    {
        $validated = $request->validated();
        TimeSlot::create($validated);
        return redirect()->route('admin.timeSlots.show')->with('success', 'Thêm ca học thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TimeSlot $timeSlot)
    {
        return Inertia::render('Admin/TimeSlots/Edit', [
            'timeSlot'=> $timeSlot
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TimeSlotRequest $request, TimeSlot $timeSlot)
    {
        $validated = $request->validated();
        $timeSlot->update($validated);
        return redirect()->route('admin.timeSlots.show')->with('success','Cập nhập thông tin ca học thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TimeSlot $timeSlot)
    {
        if ($timeSlot->hasRelations()) {
            $timeSlot->delete();
            return redirect()->route('admin.timeSlots.show')->with('success','Xóa ca học thành công !');
        }
        else{
            $timeSlot->forceDelete();
            return redirect()->route('admin.timeSlots.show')->with('success','Xóa ca học thành công !');
        }
    }
}
