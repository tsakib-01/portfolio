import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume():
    pdf_path = "public/resume.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom Styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#1E293B')
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#475569')
    )
    
    heading_style = ParagraphStyle(
        'HeadingStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0F172A'),
        spaceAfter=2
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#334155')
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=body_style,
        leftIndent=10,
        spaceAfter=2
    )

    job_title_style = ParagraphStyle(
        'JobTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#1E293B')
    )

    italic_style = ParagraphStyle(
        'ItalicStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#475569')
    )

    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#64748B')
    )

    story = []

    # Header Table (Name on left, Contact on right)
    header_data = [
        [
            Paragraph("<b>TASNIM ANJUM<br/>SAKIB BARBHUIYA</b>", name_style),
            Paragraph("<b>Phone:</b> +8801747536594<br/><b>Email:</b> tsakibxxx9111@gmail.com<br/><b>Location:</b> Sylhet, Bangladesh", contact_style)
        ]
    ]
    header_table = Table(header_data, colWidths=[310, 222])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 8))

    # Divider
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#CBD5E1'), spaceBefore=0, spaceAfter=8))

    # SUMMARY
    story.append(Paragraph("SUMMARY", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#E2E8F0'), spaceBefore=1, spaceAfter=5))
    summary_text = "Motivated and detail-oriented Computer Science and Engineering graduate with skills in web development, graphic design, and AI-related digital tasks. Experienced with various software tools and programming languages. Passionate about technology, problem-solving, and contributing to innovative digital projects and AI data collection and annotation tasks with accuracy and efficiency."
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 8))

    # EXPERIENCE
    story.append(Paragraph("EXPERIENCE", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#E2E8F0'), spaceBefore=1, spaceAfter=5))

    experiences = [
        {
            "company": "Online Marketplace",
            "role": "Graphic Designer (Freelance & Creative Projects)",
            "period": "2020 - 2021",
            "bullets": [
                "Designed social media posts, promotional banners, and digital marketing materials.",
                "Worked with Adobe Photoshop, Illustrator, and Figma for creative design projects.",
                "Created visually engaging and professional content with strong attention to detail."
            ]
        },
        {
            "company": "Redhills Solicitor",
            "role": "Frontend Web Developer",
            "period": "2024 - 2025",
            "bullets": [
                "Developed a responsive legal consultation website.",
                "Added appointment scheduling and contact features.",
                "Improved overall user experience and navigation."
            ]
        },
        {
            "company": "Microtimes",
            "role": "Web Developer",
            "period": "2022 - 2024",
            "bullets": [
                "Built a responsive e-commerce website for browsing and purchasing electronic products.",
                "Implemented product filtering, category navigation, and smooth checkout for users.",
                "Assisted in improving website performance and usability across different devices."
            ]
        }
    ]

    for exp in experiences:
        t_data = [
            [Paragraph(exp["company"], job_title_style), Paragraph(exp["period"], date_style)]
        ]
        t = Table(t_data, colWidths=[400, 132])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t)
        story.append(Paragraph(exp["role"], italic_style))
        story.append(Spacer(1, 2))
        for b in exp["bullets"]:
            story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 6))

    # EDUCATION
    story.append(Paragraph("EDUCATION", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#E2E8F0'), spaceBefore=1, spaceAfter=5))

    edu_data = [
        [Paragraph("North East University Bangladesh", job_title_style), Paragraph("2022 - 2026", date_style)]
    ]
    edu_table = Table(edu_data, colWidths=[400, 132])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Paragraph("Bachelor of Science in Computer Science & Engineering", italic_style))
    story.append(Paragraph("<b>Relevant Coursework:</b> Web Development, Database Management, Software Engineering, Artificial Intelligence, Computer Networks, Data Structures & Algorithms.", ParagraphStyle('EduCourse', parent=body_style, spaceBefore=2)))
    story.append(Spacer(1, 8))

    # SKILLS
    story.append(Paragraph("SKILLS", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#E2E8F0'), spaceBefore=1, spaceAfter=5))

    col1 = [
        "• HTML, CSS, JavaScript, Python, C++",
        "• WordPress & Web Development",
        "• Photoshop, Illustrator & Figma",
        "• Graphic Design & Content Creation",
        "• AI Data Collection & Annotation",
        "• Microsoft Excel, Word & PowerPoint"
    ]
    col2 = [
        "• Microsoft Office & Google Workspace",
        "• Fluent English Communication",
        "• Problem-Solving & Teamwork",
        "• Time Management",
        "• Remote Collaboration"
    ]

    max_len = max(len(col1), len(col2))
    skills_table_data = []
    for i in range(max_len):
        c1 = col1[i] if i < len(col1) else ""
        c2 = col2[i] if i < len(col2) else ""
        skills_table_data.append([
            Paragraph(c1, body_style),
            Paragraph(c2, body_style)
        ])

    skills_table = Table(skills_table_data, colWidths=[266, 266])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(skills_table)

    doc.build(story)
    print("Resume PDF generated successfully at public/resume.pdf")

if __name__ == '__main__':
    create_resume()
