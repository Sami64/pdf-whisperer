'use client'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { Loader2Icon, RefreshCcw, ZoomInIcon, ZoomOutIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from './ui/button'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const PdfView = ({ url }: { url: string }) => {
	const [numPages, setNumPages] = useState<number>()
	const [pageNumber, setPageNumber] = useState<number>(1)
	const [scale, setScale] = useState<number>(1.0)
	const [rotation, setRotation] = useState<number>(0)
	const [file, setFile] = useState<Blob | null>(null)

	useEffect(() => {
		const fetchFile = async () => {
			const response = await fetch(url)
			const blob = await response.blob()
			setFile(blob)
		}

		fetchFile()
	}, [url])

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
		setNumPages(numPages)
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="sticky top-0 z-50 bg-gray-100 p-2 rounded-b-lg">
				<div className="max-w-6xl px-2 grid grid-cols-6 gap-2">
					<Button
						variant="outline"
						disabled={pageNumber === 1}
						onClick={() => {
							if (pageNumber > 1) {
								setPageNumber(pageNumber - 1)
							}
						}}>
						Previous
					</Button>
					<p className="flex items-center justify-center">
						{pageNumber} of {numPages}
					</p>

					<Button
						variant="outline"
						disabled={pageNumber === numPages}
						onClick={() => {
							if (numPages)
								if (pageNumber < numPages) {
									setPageNumber(pageNumber + 1)
								}
						}}>
						Next
					</Button>
					<Button
						variant="outline"
						onClick={() => {
							setRotation((rotation + 90) % 360)
						}}>
						<RefreshCcw />
					</Button>
					<Button
						variant="outline"
						disabled={scale >= 1.5}
						onClick={() => setScale(scale * 1.2)}>
						<ZoomInIcon />
					</Button>
					<Button
						variant="outline"
						disabled={scale >= 1.5}
						onClick={() => setScale(scale / 1.2)}>
						<ZoomOutIcon />
					</Button>
				</div>
			</div>
			{!file ? (
				<Loader2Icon className="animate-spin h-20 w-20 text-indigo-600 mt-20" />
			) : (
				<Document
					loading={null}
					file={file}
					rotate={rotation}
					onLoadSuccess={onDocumentLoadSuccess}
					className="m-4 overflow-scroll">
					<Page
						className="shadow-lg"
						scale={scale}
						pageNumber={pageNumber}
					/>
				</Document>
			)}
		</div>
	)
}
export default PdfView
